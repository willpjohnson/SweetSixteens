# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  title      :string           not null
#  body       :text             not null
#  artist     :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
