class WordsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable

    before_action :authorize
    
        def index
            words = Word.all
            render json: words
        end
    
        def create
            user = User.find_by!(id: session[:user_id])
            word = user.words.create!(word_params)
            render json: word, status: :created
        end

        def update
            word = Word.find(params[:id])
            word.update!(word_params)
            render json: word, status: :ok
        end
    
        def destroy
            word = Word.find(params[:id])
            word.delete
            head :no_content
        end
        
        private
    
        def word_params
            params.permit(:french, :english, :target)
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
    