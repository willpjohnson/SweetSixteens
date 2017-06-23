class UpdateImageUrlColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :tracks, :image_url, :string
  end
end
