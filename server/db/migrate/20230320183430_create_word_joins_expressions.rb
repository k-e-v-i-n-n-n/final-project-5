class CreateWordJoinsExpressions < ActiveRecord::Migration[7.0]
  def change
    create_table :word_joins_expressions do |t|
      t.integer :expression_id
      t.integer :word_id

      t.timestamps
    end
  end
end
