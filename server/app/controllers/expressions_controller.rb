class ExpressionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable

    def index
        expressions = Expression.all
        render json: expressions
    end

    def create
        user = User.find_by!(id: session[:user_id])
        expression = user.expressions.create!(expression_params)
        render json: expression, status: :created
    end

    private

    def unprocessable(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def not_found
        render json: {errors: "Item not found..."}, status: :not_found
    end

    def expression_params
        params.permit(:french, :english, :target)
    end
end
