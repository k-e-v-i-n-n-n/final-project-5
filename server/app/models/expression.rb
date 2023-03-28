class Expression < ApplicationRecord
    belongs_to :user
    has_many :lists
    has_many :categories, through: :lists
end
