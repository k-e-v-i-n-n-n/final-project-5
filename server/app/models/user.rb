class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :words
    has_many :expressions
    has_many :lists
    has_many :categories
end
