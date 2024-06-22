class ActorsController < ApplicationController
  require_relative '../../lib/cache/cache_keys'

  def index
    page = params[:page] || 1
    name = params[:name]

    cache_key = CacheKeys.actor_cache_key(params)

    @actors = Rails.cache.fetch(cache_key, expires_in: 1.hour) do
      actors = NameBasic.joins(:professions)
                 .where('professions.name IN (?)', %w[actor actress])
      actors = actors.where('primary_name = ?', name.to_s) if name.present?
      actors = actors.paginate(page: page, per_page: 15)
      serialized = actors.map do |actor|
        ActorSerializer.new(actor).as_json
      end
      serialized
    end

    render json: @actors
  end
end
