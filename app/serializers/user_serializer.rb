class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :expressions
  has_many :words
  has_many :categories
  has_many :wordstars
end
