class TitlePrincipalsController < ApplicationController
  before_action :set_title_principal, only: %i[ show edit update destroy ]

  # GET /title_principals or /title_principals.json
  def index
    @title_principals = TitlePrincipal.all
  end

  # GET /title_principals/1 or /title_principals/1.json
  def show
  end

  # GET /title_principals/new
  def new
    @title_principal = TitlePrincipal.new
  end

  # GET /title_principals/1/edit
  def edit
  end

  # POST /title_principals or /title_principals.json
  def create
    @title_principal = TitlePrincipal.new(title_principal_params)

    respond_to do |format|
      if @title_principal.save
        format.html { redirect_to title_principal_url(@title_principal), notice: "Title principal was successfully created." }
        format.json { render :show, status: :created, location: @title_principal }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @title_principal.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /title_principals/1 or /title_principals/1.json
  def update
    respond_to do |format|
      if @title_principal.update(title_principal_params)
        format.html { redirect_to title_principal_url(@title_principal), notice: "Title principal was successfully updated." }
        format.json { render :show, status: :ok, location: @title_principal }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @title_principal.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /title_principals/1 or /title_principals/1.json
  def destroy
    @title_principal.destroy!

    respond_to do |format|
      format.html { redirect_to title_principals_url, notice: "Title principal was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title_principal
      @title_principal = TitlePrincipal.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def title_principal_params
      params.require(:title_principal).permit(:tconst, :ordering, :nconst, :category, :job, :characters)
    end
end
