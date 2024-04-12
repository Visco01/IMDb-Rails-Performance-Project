class TitleAkasController < ApplicationController
  before_action :set_title_aka, only: %i[ show edit update destroy ]

  # GET /title_akas or /title_akas.json
  def index
    @title_akas = TitleAka.all
  end

  # GET /title_akas/1 or /title_akas/1.json
  def show
  end

  # GET /title_akas/new
  def new
    @title_aka = TitleAka.new
  end

  # GET /title_akas/1/edit
  def edit
  end

  # POST /title_akas or /title_akas.json
  def create
    @title_aka = TitleAka.new(title_aka_params)

    respond_to do |format|
      if @title_aka.save
        format.html { redirect_to title_aka_url(@title_aka), notice: "Title aka was successfully created." }
        format.json { render :show, status: :created, location: @title_aka }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @title_aka.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /title_akas/1 or /title_akas/1.json
  def update
    respond_to do |format|
      if @title_aka.update(title_aka_params)
        format.html { redirect_to title_aka_url(@title_aka), notice: "Title aka was successfully updated." }
        format.json { render :show, status: :ok, location: @title_aka }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @title_aka.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /title_akas/1 or /title_akas/1.json
  def destroy
    @title_aka.destroy!

    respond_to do |format|
      format.html { redirect_to title_akas_url, notice: "Title aka was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title_aka
      @title_aka = TitleAka.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def title_aka_params
      params.require(:title_aka).permit(:title_id, :ordering, :title, :region, :language, :is_original_title)
    end
end
