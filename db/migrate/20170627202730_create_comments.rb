class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :annotation_id, null: false
      t.text :body, null: false
      t.integer :score, null: false, default: 0

      t.timestamps
    end
    add_index :comments, :author_id
    add_index :comments, :annotation_id
  end
end
