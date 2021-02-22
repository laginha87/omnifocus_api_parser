task :install do
  Dir["Plugins/*.js"].each do |e|
    FileUtils.cp(e, "Build/#{File.basename(e, ".js")}.omnijs")
  end
end