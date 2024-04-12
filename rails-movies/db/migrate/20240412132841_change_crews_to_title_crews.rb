class ChangeCrewsToTitleCrews < ActiveRecord::Migration[7.1]
  def change
    rename_table :crews, :title_crews
  end
end
