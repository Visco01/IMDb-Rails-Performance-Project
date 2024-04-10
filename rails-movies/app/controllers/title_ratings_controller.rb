class TitleRatingsController < ApplicationController
  before_action :set_title_rating, only: %i[ show edit update destroy ]

  # GET /title_ratings or /title_ratings.json
  def index
    @title_ratings = TitleRating.all
  end

  # GET /title_ratings/1 or /title_ratings/1.json
  def show
  end

  # GET /title_ratings/new
  def new
    @title_rating = TitleRating.new
  end

  # GET /title_ratings/1/edit
  def edit
  end

  # POST /title_ratings or /title_ratings.json
  def create
    @title_rating = TitleRating.new(title_rating_params)

    respond_to do |format|
      if @title_rating.save
        format.html { redirect_to title_rating_url(@title_rating), notice: "Title rating was successfully created." }
        format.json { render :show, status: :created, location: @title_rating }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @title_rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /title_ratings/1 or /title_ratings/1.json
  def update
    respond_to do |format|
      if @title_rating.update(title_rating_params)
        format.html { redirect_to title_rating_url(@title_rating), notice: "Title rating was successfully updated." }
        format.json { render :show, status: :ok, location: @title_rating }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @title_rating.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /title_ratings/1 or /title_ratings/1.json
  def destroy
    @title_rating.destroy!

    respond_to do |format|
      format.html { redirect_to title_ratings_url, notice: "Title rating was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title_rating
      @title_rating = TitleRating.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def title_rating_params
      params.require(:title_rating).permit(:tconst, :average_rating, :num_votes)
    end
end
