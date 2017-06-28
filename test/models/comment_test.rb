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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
