class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category
  belongs_to :user
  has_many :words
  has_many :wordstars
  # has_many :expressions
end
