class CreateWords < ActiveRecord::Migration[7.0]
  def change
    create_table :words do |t|
      t.string :french
      t.string :english
      t.string :target
      t.integer :user_id

      t.timestamps
    end
  end
end
