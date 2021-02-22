require 'nokogiri'
require 'pry'
f = File.foreach("./Untitled.md")

output = File.open("./lib.d.ts", "w")
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
    $1.gsub(".", "")
  }.gsub("function: ", "fn: ")
  .gsub(/(\w+) of (\w+) of (\w+)/) { |_| "#{$1}<#{$2}<#{$3}>>"}
  .gsub(/(\w+) of (\w+)/) { |_| "#{$1}<#{$2}>"}
  .gsub("with", "wth")
  .gsub(/(\w+, )*( ?or \w+)+/) {|e|
    e.split(", ").flat_map{|e| e.split(" or ")}.join("|")
  }.gsub(" or ", "|")
  .gsub("|or ", "|")
  .gsub("Array<URL>, String|Image|FileWrapper", "Array<URL>|String|Image|FileWrapper")
  .gsub(" Image ", "typeof Image")
  .gsub("Image|", "typeof Image|")
  .gsub("<Image>", "<typeof Image>")
end

def parse_func(fn, static = false)
  bd,cm = fn
  "/**\n  *  #{cm}  **/\n" + (static  ? " static " : "" ) + parse_line(bd)
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
classes.delete("Image")
classes.delete("Function")
classes.delete("Promise")

classes.sort.each do |cl, methods|
  output << """
declare class #{cl.gsub(".", "")} {
  #{methods[:instance_funcs].map {|e| parse_func(e) }.join("\n   ")}
  #{methods[:class_func].map {|e| parse_func(e, true) }.join("\n   ")}
  #{methods[:instance_props].map {|e| parse_var(e)}.join("\n    ")  }
  #{methods[:class_props].map {|e| parse_var(e, true)}.join("\n    ") }
}
"""
end