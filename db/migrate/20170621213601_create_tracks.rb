class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :body, null: false
      t.string :artist, null: false
      t.string :image_url, null: false

      t.timestamps
    end
    add_index :tracks, :author_id
  end
end
