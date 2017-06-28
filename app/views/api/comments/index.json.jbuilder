@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :author_id, :annotation_id, :body, :score, :created_at
    json.author comment.author.username
    json.author_pic asset_path(comment.author.avatar.url)
  end
end
