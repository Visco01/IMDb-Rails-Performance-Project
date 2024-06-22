class TitleBasicsController < ApplicationController
  require_relative '../../lib/cache/cache_keys'
  before_action :set_title_basic, only: %i[ show edit update destroy ]

  # GET /title_basics or /title_basics.json
  def index
    page = params[:page] || 1
    title = params[:title]
    genre = params[:genre]
    max_runtime = params[:max_runtime]
    adult = params[:adult]

    cache_key = CacheKeys.title_cache_key(params)

    @title_basics = Rails.cache.fetch(cache_key, expires_in: 15.minutes) do
      scope = TitleBasic.select(:id, :primary_title, :title_type, :start_year, :is_adult, :runtime_minutes)
      scope = scope.joins(:genres).where('genres.name IN (?)', genre) if genre.present?
      scope = scope.where('primary_title = ?', title.to_s) if title.present?
      scope = scope.where('runtime_minutes <= ?', max_runtime) if max_runtime.present?
      scope = scope.where(is_adult: adult) if adult.present?
      titles = scope.paginate(page: page, per_page: 15)
      serialized = titles.map do |title_basic|
        TitleBasicSerializer.new(title_basic).as_json
      end
      serialized
    end

    render json: @title_basics
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
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @title_basic.errors, status: :unprocessable_entity }
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
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @title_basic.errors, status: :unprocessable_entity }
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
end
