class Word < ApplicationRecord
    belongs_to :user
    # belongs_to :list
    # has_many :expressions, through: :word_joins_expressions
    has_many :categories, through: :words_joins_categories
end
