require 'sinatra'
require 'fileutils'


def create_dir(dir)
  FileUtils.mkdir_p(dir)
end

get '/code' do
  dir = params["f"].gsub("+", " ")
  create_dir(dir) unless Dir.exists?(dir)
  `code "#{params["f"].gsub("+", " ")}"`
end