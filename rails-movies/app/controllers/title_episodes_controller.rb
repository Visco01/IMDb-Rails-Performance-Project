class TitleEpisodesController < ApplicationController
  before_action :set_title_episode, only: %i[ show edit update destroy ]

  # GET /title_episodes or /title_episodes.json
  def index
    @title_episodes = TitleEpisode.all
  end

  # GET /title_episodes/1 or /title_episodes/1.json
  def show
  end

  # GET /title_episodes/new
  def new
    @title_episode = TitleEpisode.new
  end

  # GET /title_episodes/1/edit
  def edit
  end

  # POST /title_episodes or /title_episodes.json
  def create
    @title_episode = TitleEpisode.new(title_episode_params)

    respond_to do |format|
      if @title_episode.save
        format.html { redirect_to title_episode_url(@title_episode), notice: "Title episode was successfully created." }
        format.json { render :show, status: :created, location: @title_episode }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @title_episode.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /title_episodes/1 or /title_episodes/1.json
  def update
    respond_to do |format|
      if @title_episode.update(title_episode_params)
        format.html { redirect_to title_episode_url(@title_episode), notice: "Title episode was successfully updated." }
        format.json { render :show, status: :ok, location: @title_episode }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @title_episode.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /title_episodes/1 or /title_episodes/1.json
  def destroy
    @title_episode.destroy!

    respond_to do |format|
      format.html { redirect_to title_episodes_url, notice: "Title episode was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title_episode
      @title_episode = TitleEpisode.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def title_episode_params
      params.require(:title_episode).permit(:tconst, :parent_tconst, :season_number, :episode_number)
    end
end
