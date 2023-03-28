class List < ApplicationRecord

    # accepts_nested_attributes_for :categories
    belongs_to :user
    belongs_to :category
    belongs_to :word
    belongs_to :expressions
end
