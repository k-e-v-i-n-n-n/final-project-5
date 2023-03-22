class User < ApplicationRecord
    has_many :words, :expressions, :stars
end
