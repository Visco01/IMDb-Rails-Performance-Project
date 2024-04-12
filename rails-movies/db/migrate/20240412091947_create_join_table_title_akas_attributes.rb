class CreateJoinTableTitleAkasAttributes < ActiveRecord::Migration[7.1]
  def change
    create_join_table :title_akas, :attributes do |t|
      t.index [:title_aka_id, :attribute_id]
      t.index [:attribute_id, :title_aka_id]
    end
  end
end
