class NameBasicsController < ApplicationController
  before_action :set_name_basic, only: %i[ show edit update destroy ]

  # GET /name_basics or /name_basics.json
  def index
    @name_basics = NameBasic.all
  end

  # GET /name_basics/1 or /name_basics/1.json
  def show
  end

  # GET /name_basics/new
  def new
    @name_basic = NameBasic.new
  end

  # GET /name_basics/1/edit
  def edit
  end

  # POST /name_basics or /name_basics.json
  def create
    @name_basic = NameBasic.new(name_basic_params)

    respond_to do |format|
      if @name_basic.save
        format.html { redirect_to name_basic_url(@name_basic), notice: "Name basic was successfully created." }
        format.json { render :show, status: :created, location: @name_basic }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @name_basic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /name_basics/1 or /name_basics/1.json
  def update
    respond_to do |format|
      if @name_basic.update(name_basic_params)
        format.html { redirect_to name_basic_url(@name_basic), notice: "Name basic was successfully updated." }
        format.json { render :show, status: :ok, location: @name_basic }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @name_basic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /name_basics/1 or /name_basics/1.json
  def destroy
    @name_basic.destroy!

    respond_to do |format|
      format.html { redirect_to name_basics_url, notice: "Name basic was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_name_basic
      @name_basic = NameBasic.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def name_basic_params
      params.require(:name_basic).permit(:nconst, :primary_name, :birth_year, :death_year)
    end
end
