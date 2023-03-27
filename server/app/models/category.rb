class Category < ApplicationRecord
    belongs_to :user
    has_many :words, through: :words_joins_categories
end
