# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates_uniqueness_of :tag_id, scope: [:track_id]
  validates :tag_id, :track_id, presence: true

  belongs_to :tag,
    class_name: :Tag,
    foreign_key: :tag_id

  belongs_to :track,
    class_name: :Track,
    foreign_key: :track_id

end
