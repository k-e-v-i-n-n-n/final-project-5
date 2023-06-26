class Word < ApplicationRecord
    belongs_to :user
    validates :french, presence: true
    validates :english, presence: true
    has_many :wordstars
    has_many :categories, through: :wordstars

end
