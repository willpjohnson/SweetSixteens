# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  author_id     :integer          not null
#  annotation_id :integer          not null
#  body          :text             not null
#  score         :integer          default(0), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Comment < ApplicationRecord
  validates :author_id, :annotation_id, :body, :score, presence: true

  belongs_to :annotation
  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id
end
