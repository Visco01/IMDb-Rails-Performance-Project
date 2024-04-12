class ChangeCrewItToTitleCrewId < ActiveRecord::Migration[7.1]
  def change
    rename_column :writers, :crew_id, :title_crew_id
    rename_column :directors, :crew_id, :title_crew_id
  end
end
