class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :expressions
  has_many :words

end
