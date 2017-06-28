# == Schema Information
#
# Table name: votes
#
#  id           :integer          not null, primary key
#  votable_id   :integer
#  votable_type :string
#  user_id      :integer          not null
#  value        :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Vote < ApplicationRecord
  validates :votable_id, :votable_type, :user_id, :value, presence: true
  validates_uniqueness_of :user_id, scope: [:votable_id, :votable_type]
  validates :value, inclusion: { in: [-1, 1] }

  belongs_to :votable, polymorphic: true
  belongs_to :user
end
