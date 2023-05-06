require 'rack/proxy'

Rails.application.config.middleware.insert_before 0, Rack::Proxy do
  # Forward requests to the Express.js server
  proxy '/exp', to: 'https://the-french-things.onrender.com:8000'
end



# Rails.application.config.middleware.insert_before Rack::Runtime, Rack::Proxy do
#   proxy_options = {
#     ssl_verify_none: true,
#     x_forwarded_headers: false,
#     suppress_via_header: true
#   }

#   proxy '/translate', 'https://the-french-things.onrender.com:8000', proxy_options
# end

