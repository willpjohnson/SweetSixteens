# == Schema Information
#
# Table name: annotations
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  author_id  :integer          not null
#  body       :text             not null
#  score      :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  start_idx  :integer
#  end_idx    :integer
#

class Annotation < ApplicationRecord
  validates :track_id, :author_id, :body, :score, :start_idx, :end_idx, presence: true

  belongs_to :track,
    class_name: :Track,
    primary_key: :id,
    foreign_key: :track_id

  has_many :comments, as: :commentable

end
