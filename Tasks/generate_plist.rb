require "erb"
class GeneratePlist
  def initialize
    @user, @ruby_path, @app_path=[`whoami`, `which ruby`, Dir.pwd].map(&:chomp)
  end

  def self.execute
    new.send(:execute)
  end

  private
  def execute
    @template = File.read('./Tasks/com.laginha87.omnifocus-sinatra.plist.erb')
    File.write("./com.laginha87.omnifocus-sinatra.plist", ERB.new(@template).result(binding))
  end
end