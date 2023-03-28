class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
   
      t.integer :category_id
      t.integer :word_id
      t.integer :expression_id
      t.integer :user_id

      t.timestamps
    end
  end
end
