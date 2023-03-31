class Category < ApplicationRecord
    validates :category, presence: true
    belongs_to :user
    has_many :wordstars, dependent: :destroy
    has_many :words, through: :wordstars
end
