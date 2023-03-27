class Categories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
   
      t.integer :category
      t.integer :user_id

      t.timestamps
    end
  end
end