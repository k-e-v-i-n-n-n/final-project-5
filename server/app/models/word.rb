class Word < ApplicationRecord
    belongs_to :user
    # belongs_to :list
    # has_many :expressions, through: :word_joins_expressions
end
