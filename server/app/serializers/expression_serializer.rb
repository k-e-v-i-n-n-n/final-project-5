class ExpressionSerializer < ActiveModel::Serializer
  attributes :id, :french, :english, :target
  # belongs_to :user
end
