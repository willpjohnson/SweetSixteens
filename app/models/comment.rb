# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  body             :text             not null
#  score            :integer          default(0), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  commentable_id   :integer
#  commentable_type :string
#  author_id        :integer          not null
#

class Comment < ApplicationRecord
  validates :author_id, :commentable_id, :commentable_type, :body, :score, presence: true

  belongs_to :commentable, polymorphic: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :votes, as: :votable
end
