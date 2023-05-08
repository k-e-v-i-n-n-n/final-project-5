class ProxyController < ApplicationController
        
    def forward
        response = HTTParty.send(request.method.downcase, params[:url], headers: request.headers, body: params.except(:url).to_json)
        render json: response.body, status: response.code
      end
      
end
