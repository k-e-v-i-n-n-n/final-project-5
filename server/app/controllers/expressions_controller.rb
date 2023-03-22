class ExpressionsController < ApplicationController

    def new_expression

        expression = Expression.find_or_create_by(expression_params)
        french_split = expression.french.split(" ")
        french_split.for_each {|word| 

        new_word = Word.find_or_create_by()

            }

    end

    private

    def expression_params

        params.permit(:french, :english, :source, :target)

    end
end
