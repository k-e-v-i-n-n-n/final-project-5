class ExpressionSerializer < ActiveModel::Serializer
  attributes :id
  attributes :id, :french, :english, :target
  belongs_to :user
end
