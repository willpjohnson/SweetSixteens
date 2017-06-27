# json.array! @annotations do |anno|
#   json.id anno.id
#   json.start_idx anno.start_idx
#   json.end_idx anno.end_idx
# end

@annotations.each do |anno|
  json.set! anno.id do
    json.extract! anno, :id, :start_idx, :end_idx
  end
end
