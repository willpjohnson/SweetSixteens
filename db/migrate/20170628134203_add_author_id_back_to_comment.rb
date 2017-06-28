class AddAuthorIdBackToComment < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :author_id, :integer, presence: true
  end
end
