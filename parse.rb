require 'nokogiri'
require 'pry'
f = File.foreach("./Untitled.md")

output = File.open("./types/global.d.ts", "w")
classes = {}
sym = nil
next_def = nil
store_comment = false
f.reject(&:empty?).each do |l|
  case l
  when /^# /
    html = Nokogiri::HTML(l[2..-1])
    sym = html.text().split(" ").first
    classes[sym] = {
      class_func: [],
      class_props: [],
      constructor: [],
      instance_funcs: [],
      instance_props: [],
    }
  when /\#\# Class Functions/
    next_def=:class_func
  when /\#\# Class Properties/
    next_def=:class_props
  when /\#\# Constructors/
    next_def=:constructor
  when /\#\# Instance Functions/
    next_def=:instance_funcs
  when /\#\# Instance Properties/
    next_def=:instance_props
  when /^### /
    html = Nokogiri::HTML(l[4..-1]).text()
    classes[sym][next_def] << [html]
    store_comment = true
  else
    if store_comment
      store_comment  = false
      classes[sym][next_def].last << l
    end
  end
end

def parse_line(ln)
  ln
  .gsub("function ", "")
  .gsub("`", "")
  .gsub("→", ":")
  .gsub(/\[((\w|\.)+)\]\(#(\w|\.)+\)/) { |_|
    $1
  }.gsub("function: ", "fn: ")
  .gsub(/(\S+) of (\S+) of (\S+)/) { |_| "#{$1}<#{$2}<#{$3}>>"}
  .gsub(/(\S+) of (\S+)/) { |_| "#{$1}<#{$2}>"}
  .gsub("with", "wth")
  .gsub(/(\S+, )*( ?or \S+)+/) {|e|
    e.split(", ").flat_map{|e| e.split(" or ")}.join("|")
  }.gsub(" or ", "|")
  .gsub("|or ", "|")
  .gsub(",>", ">,")
  .gsub(")>", ">)")
  .gsub("Array<URL>, String|Image|FileWrapper", "Array<URL>|String|Image|FileWrapper")
end

def parse_func(fn, static = false, pre='')
  bd,cm = fn
  "/**\n  *  #{cm}  **/\n" + pre + (static  ? " static " : "" ) + parse_line(bd)
end

def parse_var(l, static=false)
  bd,cm = l
  res = parse_line(bd).gsub("var ", "")
  if res.include?("*read-only*")
    res.gsub!("*read-only*", "")
    res = "readonly #{res}"
  end
  "/**\n  *  #{cm}  **/\n" + (static  ? " static " : "" )+ res
end

classes.delete("Array")
classes.delete("Error")
classes.delete("Function")
classes.delete("Promise")

def merge!(h1,h2)
  h1.merge!(h2) {|k,v1,v2| merge!(v1,v2)}
end

submodules = classes.select {|k,v| k.include?(".")}

submodules.each do |e,k|
  classes.delete(e)
  root = classes
  *names, last_name = e.split(".")
  cumulator = names.reverse.reduce({last_name =>  k}) do |acc, curr|
    { curr => {submodules:  acc}}
  end
  merge!(classes, cumulator)
end


def print_class(cl, methods, namespaced: false)
  declare = namespaced ? "" : "declare"
  if(cl.end_with?("Array") && cl.length > "Array".length)
    if(cl != "SectionArray")
      cl = "#{cl} extends Array<#{cl.gsub("Array","")}>"
    else
      cl = "SectionArray extends Array<Folder|Project>"
    end
  end
  res = """ #{declare} class #{cl} {
  #{methods[:constructor].map do |bd, cm|
    a,b,*c = parse_line(bd).split(/\(|\)/)
    "constructor(#{b})"
  end.join("\n   ")}
  #{methods[:instance_funcs].map {|e| parse_func(e) }.join("\n   ")}
  #{methods[:class_func].map {|e| parse_func(e, true) }.join("\n   ")}
  #{methods[:instance_props].map {|e| parse_var(e)}.join("\n    ")  }
  #{methods[:class_props].map {|e| parse_var(e, true)}.join("\n    ") }
}
"""
  if(methods[:submodules])
    methods[:submodules].each do |name, methods|
      res << """#{declare} namespace #{cl} {
        #{print_class(name, methods, namespaced: true)}
      }"""
    end
  end
  res
end
classes.sort.each do |cl, methods|
  output << print_class(cl, methods)
end


database_methods = classes["Database"]
output << """
 declare module globalThis {
  #{database_methods[:instance_funcs].map do |e|
    res = parse_func(e, false, "let ").sub("(", ": (").sub(" : ", " => ")
    res.include?("=>") ? res : res + " => void"
  end.join("\n   ")
 }
 #{database_methods[:instance_props].map {|e| parse_var(e).sub("readonly", "let")}.join("\n    ")  }
}
"""