class DirectorsController < ApplicationController
  require_relative '../../lib/cache/cache_keys'

  def index
    page = params[:page] || 1
    name = params[:name]

    cache_key = CacheKeys.director_cache_key(params)

    @directors = Rails.cache.fetch(cache_key, expires_in: 1.hour) do
      directors = NameBasic.joins(:professions)
                    .where('professions.name IN (?)', %w[director])
      directors = directors.where('primary_name LIKE ?', "%#{name}%") if name.present?
      directors.paginate(page: page, per_page: 15)
    end

    render json: @directors, each_serializer: DirectorSerializer
  end
end
