class ExpressionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable

    before_action :authorize

    def index
        expressions = Expression.all
        render json: expressions
    end

    def create
        user = User.find(session[:user_id])
        expression = user.expressions.create!(expression_params)
        render json: expression, status: :created
    end

    def destroy
        expression = Expression.find(params[:id])
        expression.delete
        head :no_content
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

    def authorize
        render json: {errors: "Request not authorized, please login"}, status: :unauthorized unless session.include? :user_id
    end
end
