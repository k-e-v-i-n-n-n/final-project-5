class Word < ApplicationRecord
    belongs_to :user
    has_many :wordstars
    has_many :categories, through: :wordstars
end
