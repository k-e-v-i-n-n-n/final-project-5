class Expression < ApplicationRecord
    belongs_to :user
    validates :french, presence: true
    validates :english, presence: true
end
