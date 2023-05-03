
class TranslateController < ActionController::Base
    include Rack::Proxy
  
    def index
      proxy_request('https://the-french-things.onrender.com:8000/translate')
    end
  end
  
