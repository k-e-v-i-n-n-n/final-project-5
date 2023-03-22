class Expression < ApplicationRecord
    belongs_to :user
    has_many :words, through: :word_joins_expressions
end
