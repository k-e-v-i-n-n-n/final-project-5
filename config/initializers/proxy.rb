require 'rack/proxy'

# Rails.application.config.middleware.insert_before 0, Rack::Proxy do
#   # Forward requests to the Express.js server
#   proxy '/exp', to: 'https://the-french-things.onrender.com:8000'
# end



Rails.application.config.middleware.insert_before Rack::Runtime, Rack::Proxy do
proxy_options = {
  ssl: {
    verify: false
  },
  headers: {
    'X-Forwarded-Proto' => 'https'
  }
}


  proxy '/translate', 'https://the-french-things.onrender.com:8000', proxy_options
end

