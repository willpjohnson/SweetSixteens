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

require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
