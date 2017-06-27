json.track do

  json.id @track.id
  json.title @track.title
  json.body @track.body
  json.artist @track.artist
  json.author_id @track.author_id
  json.image_url asset_path(@track.image.url)
  json.annotation_ids @track.annotations.pluck(:id)
end

json.annotations do

  @track.annotations.each do |anno|
    json.set! anno.id do
      json.extract! anno, :id, :start_idx, :end_idx, :body
    end
  end
end
