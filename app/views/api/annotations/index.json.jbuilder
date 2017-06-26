json.array! @annotations do |anno|
  json.id anno.id
  json.start_idx anno.start_idx
  json.end_idx anno.end_idx
end
