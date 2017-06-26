class AddLyricIndecesToAnnotations < ActiveRecord::Migration[5.0]
  def change
    add_column :annotations, :start_idx, :integer
    add_column :annotations, :end_idx, :integer
  end
end
