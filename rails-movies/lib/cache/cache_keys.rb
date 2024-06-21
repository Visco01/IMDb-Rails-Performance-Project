module CacheKeys
  def self.actor_cache_key(params)
    name = params[:name]
    page = params[:page] || 1
    "actors/#{name}/page/#{page}"
  end

  def self.title_cache_key(params)
    title = params[:title]
    genre = params[:genre]
    max_runtime = params[:max_runtime]
    adult = params[:adult]
    page = params[:page] || 1
    "titles/#{title}/#{genre}/#{max_runtime}/#{adult}/page/#{page}"
  end
end
