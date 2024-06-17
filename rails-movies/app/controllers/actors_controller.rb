class ActorsController < ApplicationController
  def index
    profile = RubyProf.profile do
      page = params[:page] || 1
      name = params[:name]
      # SWAP queries!!!
      @actors = NameBasic.joins(:professions)
                  .where('professions.name IN (?)', %w[actor actress])
      @actors = @actors.where('primary_name LIKE ?', "%#{name}%") if name.present?
      @actors = @actors.paginate(page: page, per_page: 15)

      render json: @actors, each_serializer: ActorSerializer

    end

    printer = RubyProf::GraphHtmlPrinter.new(profile)
    File.open("ruby-prof-reports/actors_profile.html", "w") do |file|
      printer.print(file)
    end
  end
end
