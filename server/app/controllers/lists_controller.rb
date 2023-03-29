class ListsController < ApplicationController

    def create
        user = User.find_by!(id: session[:user_id])
        list = user.lists.create!(list_params)
        render json: list, status: :created
    end

    private

    def list_params
        params.permit(:category, :word_id, :expression_id)
    end

    def unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: user.errors.full_messages}, status: :not_found
    end
end
