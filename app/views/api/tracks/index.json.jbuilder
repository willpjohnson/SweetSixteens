# @top_tracks.each do |track|
#   json.set! track.id do
#     json.id track.id
#     json.title track.title
#     json.artist track.artist
#     json.image_url track.image_url
#   end
# end


json.array! @top_tracks do |track|
  json.id track.id
  json.title track.title
  json.artist track.artist
  json.image_url asset_path(track.image.url) 
end
