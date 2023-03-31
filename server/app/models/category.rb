class Category < ApplicationRecord
    validates :category, presence: true
    belongs_to :user
    has_many :wordstars
    has_many :words, through: :wordstars
    # has_many :expressions, through: :word_stars
end
