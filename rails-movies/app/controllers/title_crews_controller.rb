class TitleCrewsController < ApplicationController
  before_action :set_title_crew, only: %i[ show edit update destroy ]

  # GET /title_crews or /title_crews.json
  def index
    @title_crews = TitleCrew.all
  end

  # GET /title_crews/1 or /title_crews/1.json
  def show
  end

  # GET /title_crews/new
  def new
    @title_crew = TitleCrew.new
  end

  # GET /title_crews/1/edit
  def edit
  end

  # POST /title_crews or /title_crews.json
  def create
    @title_crew = TitleCrew.new(title_crew_params)

    respond_to do |format|
      if @title_crew.save
        format.html { redirect_to title_crew_url(@title_crew), notice: "Title crew was successfully created." }
        format.json { render :show, status: :created, location: @title_crew }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @title_crew.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /title_crews/1 or /title_crews/1.json
  def update
    respond_to do |format|
      if @title_crew.update(title_crew_params)
        format.html { redirect_to title_crew_url(@title_crew), notice: "Title crew was successfully updated." }
        format.json { render :show, status: :ok, location: @title_crew }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @title_crew.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /title_crews/1 or /title_crews/1.json
  def destroy
    @title_crew.destroy!

    respond_to do |format|
      format.html { redirect_to title_crews_url, notice: "Title crew was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title_crew
      @title_crew = TitleCrew.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def title_crew_params
      params.require(:title_crew).permit(:tconst)
    end
end
