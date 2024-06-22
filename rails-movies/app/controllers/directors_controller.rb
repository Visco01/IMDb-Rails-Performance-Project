class DirectorsController < ApplicationController
  require_relative '../../lib/cache/cache_keys'

  def index
    page = params[:page] || 1
    name = params[:name]

    cache_key = CacheKeys.director_cache_key(params)

    @directors = Rails.cache.fetch(cache_key, expires_in: 1.hour) do
      directors = NameBasic.joins(:professions)
                    .where('professions.name IN (?)', %w[director])
      directors = directors.where('primary_name = ?', name.to_s) if name.present?
      directors = directors.paginate(page: page, per_page: 15)
      serialized = directors.map do |director|
        DirectorSerializer.new(director).as_json
      end
      serialized
    end

    render json: @directors
  end
end
