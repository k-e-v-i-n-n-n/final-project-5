class WordstarsController < ApplicationController
    wrap_parameters false

    before_action :authorize

    def create
        user = User.find_by!(id: session[:user_id])
        list = user.wordstars.create!(list_params)
        render json: list, status: :created
        
    end

    private

    def list_params
        params.permit(:word_id, :category_id)
    end

    def unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: user.errors.full_messages}, status: :not_found
    end

    def authorize
        render json: {errors: "Request not authorized, please login"}, status: :unauthorized unless session.include? :user_id
    end
end
