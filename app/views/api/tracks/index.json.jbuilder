json.array! @top_tracks do |track|
  json.id track.id
  json.title track.title
  json.artist track.artist
  json.image_url asset_path(track.image.url)
end
