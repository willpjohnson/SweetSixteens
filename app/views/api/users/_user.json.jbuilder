
json.extract! user, :username, :id

json.votes do
  user.votes.each do |vote|
    json.set! vote.votable_type do
      json.set! vote.votable_id do
        json.extract! vote, :id, :votable_id, :votable_type, :user_id, :value
      end
    end
  end
end

json.avatar_url asset_path(user.avatar.url)
