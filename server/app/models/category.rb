class Category < ApplicationRecord
    belongs_to :user
    has_many :lists
    has_many :words, through: :lists
end
