require "./Tasks/generate_plist.rb"
task :install do
  Dir["Plugins/*.js"].each do |e|
    FileUtils.cp(e, "Build/#{File.basename(e, ".js")}.omnijs")
  end
end

task install_plist: [:generate_plist] do
  path = "/Library/LaunchAgents/com.laginha87.omnifocus-sinatra.plist"
  `sudo mv ./com.laginha87.omnifocus-sinatra.plist #{path}`
  `sudo chown root:wheel #{path}`
  `sudo launchctl load #{path}`
end

task :generate_plist do
  GeneratePlist.execute
end