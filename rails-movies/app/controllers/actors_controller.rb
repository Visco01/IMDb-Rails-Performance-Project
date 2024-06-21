class ActorsController < ApplicationController
  require_relative '../../lib/cache/cache_keys'

  def index
    page = params[:page] || 1
    name = params[:name]

    cache_key = CacheKeys.actor_cache_key(params)

    @actors = Rails.cache.fetch(cache_key, expires_in: 1.hour) do
      actors = NameBasic.joins(:professions)
                 .where('professions.name IN (?)', %w[actor actress])
      actors = actors.where('primary_name LIKE ?', "%#{name}%") if name.present?
      actors.paginate(page: page, per_page: 15)
    end

    render json: @actors, each_serializer: ActorSerializer
  end
end
