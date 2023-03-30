class ListSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :word_id
   belongs_to :user
    # belongs_to :word
    # belongs_to :category
    # belongs_to :expressions
end
