class CreateWordsJoinsLists < ActiveRecord::Migration[7.0]
  def change
    create_table :words_joins_lists do |t|
      t.integer :list_id
      t.integer :word_id

      t.timestamps
    end
  end
end
