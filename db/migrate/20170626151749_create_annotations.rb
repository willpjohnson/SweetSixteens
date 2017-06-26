class CreateAnnotations < ActiveRecord::Migration[5.0]
  def change
    create_table :annotations do |t|
      t.integer :track_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.integer :score, null: false, default: 0

      t.timestamps
    end

    add_index :annotations, :author_id
    add_index :annotations, :track_id
  end
end
