class CreateExpressions < ActiveRecord::Migration[7.0]
  def change
    create_table :expressions do |t|
      t.string :french
      t.string :english
      t.string :source
      t.string :target

      t.timestamps
    end
  end
end
