class CategorySerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  has_many :words
end
