class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.integer :votable_id
      t.string :votable_type
      t.integer :user_id, null: false
      t.integer :value, null: false

      t.timestamps
    end

    add_index :votes, :user_id
    add_index :votes, [:votable_id, :votable_type]
  end
end
