@top_tracks.each do |track|
  json.set! track.id do
    json.id track.id
    json.title track.title
    json.artist track.artist
    json.image_url asset_path(track.image.url)
    json.updated_at track.updated_at
    json.annotation_ids []
  end
end
