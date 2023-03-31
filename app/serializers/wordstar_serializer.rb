class WordstarSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :word_id
  belongs_to :user
  belongs_to :word
  belongs_to :category

end
