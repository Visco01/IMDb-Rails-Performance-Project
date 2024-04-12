class CreateJoinTableTitleAkasTypes < ActiveRecord::Migration[7.1]
  def change
    create_join_table :title_akas, :types do |t|
      t.index [:title_aka_id, :type_id]
      t.index [:type_id, :title_aka_id]
    end
  end
end
