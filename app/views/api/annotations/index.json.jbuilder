@annotations.each do |anno|
  json.set! anno.id do
    json.extract! anno, :id, :start_idx, :end_idx
  end
end
