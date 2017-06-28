class AddNullFalseConstraintToComment < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :author_id, :integer
    add_column :comments, :author_id, :integer, null: false
  end
end
