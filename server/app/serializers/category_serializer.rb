class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category
  belongs_to :user
end
