class Word < ApplicationRecord
    belongs_to :user, :star
    has_many :expressions, through: :word_joins_expressions
end
