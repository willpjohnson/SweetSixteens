class AddPolymorphismToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :commentable_id, :integer
    add_column :comments, :commentable_type, :string
    add_index :comments, [:commentable_id, :commentable_type]
    remove_column :comments, :author_id, :integer
    remove_column :comments, :annotation_id, :integer
  end
end
