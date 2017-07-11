# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :taggings,
    class_name: :Tagging,
    foreign_key: :tag_id

  has_many :tracks,
    through: :taggings,
    source: :track
end
