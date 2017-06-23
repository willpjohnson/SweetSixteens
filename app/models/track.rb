# == Schema Information
#
# Table name: tracks
#
#  id                 :integer          not null, primary key
#  author_id          :integer          not null
#  title              :string           not null
#  body               :text             not null
#  artist             :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Track < ApplicationRecord
  validates :author_id, :title, :body, :artist, presence: true

  has_attached_file :image, default_url: "default-track-image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
