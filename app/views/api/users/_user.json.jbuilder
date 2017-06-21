
json.extract! user, :username, :id
json.avatar_url asset_path(user.avatar.url)
