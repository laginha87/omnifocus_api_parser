require 'nokogiri'
require 'pry'
f = File.foreach("./Untitled.md")

output = File.open("./blah.d.ts", "w")
classes = {}
sym = nil
next_def = nil
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
    classes[sym][next_def] << html
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

def parse_func(fn)
  parse_line(fn)
end

def parse_var(l)
  res = parse_line(l).gsub("var ", "")
  if res.include?("*read-only*")
    res.gsub!("*read-only*", "")
    res = "readonly #{res}"
  end
  res
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
  #{methods[:class_func].map {|e| "static " + parse_func(e) }.join("\n   ")}
  #{methods[:instance_props].map {|e| parse_var(e)}.join("\n    ")  }
  #{methods[:class_props].map {|e| "static " + parse_var(e)}.join("\n    ") }
}
"""
end