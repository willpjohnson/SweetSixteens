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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
