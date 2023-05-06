require 'rack/proxy'

Rails.application.config.middleware.insert_before 0, Rack::Proxy do
  # Forward requests to the Express.js server
  proxy '/exp', to: 'https://the-french-things.onrender.com:8000'
end
