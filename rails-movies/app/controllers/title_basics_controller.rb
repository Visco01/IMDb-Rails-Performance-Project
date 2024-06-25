class TitleBasicsController < ApplicationController
  require_relative '../../lib/cache/cache_keys'
  before_action :set_title_basic, only: %i[ show edit update destroy ]

  # Rescue from ActiveRecord::RecordNotFound and StandardError
  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
  rescue_from StandardError, with: :handle_standard_error

  # GET /title_basics or /title_basics.json
  def index
    profile = RubyProf.profile do

<<<<<<< HEAD
      page = params[:page] || 1
      title = params[:title]
      genre = params[:genre]
      max_runtime = params[:max_runtime]
      adult = params[:adult]

      scope = TitleBasic.select(:id, :primary_title, :title_type, :start_year, :is_adult, :runtime_minutes)

      scope = scope.joins(:genres).where('genres.name IN (?)', genre) if genre.present?

      scope = scope.where('primary_title LIKE ?', "%#{title}%") if title.present?

      scope = scope.where('runtime_minutes <= ?', max_runtime) if max_runtime.present?

      scope = scope.where(is_adult: adult) if adult.present?

      @title_basics = scope.paginate(page:, per_page: 15)

      render json: @title_basics, each_serializer: TitleBasicSerializer
    end

    printer = RubyProf::GraphHtmlPrinter.new(profile)
    File.open("ruby-prof-reports/title_basics_profile.html", "w") do |file|
      printer.print(file)
    end
=======
    # Convert special string to `\N`
    genre = '\N' if genre == 'NULL_GENRE'

    cache_key = CacheKeys.title_cache_key(params)

    @title_basics = Rails.cache.fetch(cache_key, expires_in: 15.minutes) do
      scope = TitleBasic.select(:id, :primary_title, :title_type, :start_year, :is_adult, :runtime_minutes)

      if genre.present?
        if genre == '\N'
          scope = scope.joins("LEFT JOIN title_basic_genres ON title_basics.id = title_basic_genres.title_basic_id")
                       .joins("LEFT JOIN genres ON title_basic_genres.genre_id = genres.id")
                       .where('genres.name IS NULL OR genres.name = ?', genre)
        else
          scope = scope.joins(:genres).where('genres.name IN (?)', genre)
        end
      end

      scope = scope.where('primary_title = ?', title.to_s) if title.present?
      scope = scope.where('runtime_minutes <= ?', max_runtime) if max_runtime.present?
      scope = scope.where(is_adult: adult) if adult.present?

      titles = scope.paginate(page: page, per_page: 15)
      serialized = titles.map do |title_basic|
        sanitize_and_serialize(title_basic)
      end
      serialized
    end

    render json: @title_basics
  rescue => e
    render json: { error: "Sorry, we cannot find what you have searched." }, status: :ok
>>>>>>> origin/development
  end

  # GET /title_basics/1 or /title_basics/1.json
  def show
  end

  # GET /title_basics/new
  def new
    @title_basic = TitleBasic.new
  end

  # GET /title_basics/1/edit
  def edit
  end

  # POST /title_basics or /title_basics.json
  def create
    @title_basic = TitleBasic.new(title_basic_params)

    respond_to do |format|
      if @title_basic.save
        format.html { redirect_to title_basic_url(@title_basic), notice: "Title basic was successfully created." }
        format.json { render :show, status: :created, location: @title_basic }
      else
        format.html { render :new, status: :ok }
        format.json { render json: @title_basic.errors, status: :ok }
      end
    end
  end

  # PATCH/PUT /title_basics/1 or /title_basics/1.json
  def update
    respond_to do |format|
      if @title_basic.update(title_basic_params)
        format.html { redirect_to title_basic_url(@title_basic), notice: "Title basic was successfully updated." }
        format.json { render :show, status: :ok, location: @title_basic }
      else
        format.html { render :edit, status: :ok }
        format.json { render json: @title_basic.errors, status: :ok }
      end
    end
  end

  # DELETE /title_basics/1 or /title_basics/1.json
  def destroy
    @title_basic.destroy!

    respond_to do |format|
      format.html { redirect_to title_basics_url, notice: "Title basic was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_title_basic
    @title_basic = TitleBasic.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def title_basic_params
    params.require(:title_basic).permit(:tconst, :title_type, :primary_title, :original_title, :is_adult, :start_year, :end_year, :runtime_minutes)
  end

  # Sanitize and encode response data
  def sanitize_and_serialize(title_basic)
    serialized_data = TitleBasicSerializer.new(title_basic).as_json
    serialized_data.each do |key, value|
      serialized_data[key] = ERB::Util.html_escape(value) if value.is_a?(String)
    end
    serialized_data
  end

  # Handle ActiveRecord::RecordNotFound exceptions
  def handle_record_not_found
    render json: { error: "Sorry, we cannot find what you have searched." }, status: :ok
  end

  # Handle all other exceptions
  def handle_standard_error
    render json: { error: "Sorry, we cannot find what you have searched." }, status: :ok
  end
end
