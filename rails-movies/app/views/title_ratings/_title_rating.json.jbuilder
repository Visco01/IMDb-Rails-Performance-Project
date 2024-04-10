json.extract! title_rating, :id, :tconst, :average_rating, :num_votes, :created_at, :updated_at
json.url title_rating_url(title_rating, format: :json)
