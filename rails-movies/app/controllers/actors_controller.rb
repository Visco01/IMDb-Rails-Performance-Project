class ActorsController < ApplicationController
  def index
    page = params[:page] || 1
    name = params[:name]
    @actors = NameBasic.joins(:professions)
                       .where('professions.name IN (?)', %w[actor actress])
    @actors = @actors.where('primary_name LIKE ?', "%#{name}%") if name.present?
    @actors = @actors.paginate(page: page, per_page: 15)

    render json: @actors, each_serializer: ActorSerializer
  end
end
