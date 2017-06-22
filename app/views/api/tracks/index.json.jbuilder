@top_tracks.each do |track|
  json.set! track.id do
    json.id track.id
    json.title track.title
    json.artist track.artist
    json.image_url track.image_url
  end
end
