class DirectorsController < ApplicationController
  def index
    page = params[:page] || 1
    name = params[:name]
    @directors = NameBasic.joins(:professions)
                          .where('professions.name IN (?)', %w[director])
    @directors = @directors.where('primary_name LIKE ?', "%#{name}%") if name.present?
    @directors = @directors.paginate(page: page, per_page: 15)

    render json: @directors, each_serializer: DirectorSerializer
  end
end
