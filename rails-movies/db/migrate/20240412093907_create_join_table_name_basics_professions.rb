class CreateJoinTableNameBasicsProfessions < ActiveRecord::Migration[7.1]
  def change
    create_join_table :name_basics, :professions do |t|
      t.index [:name_basic_id, :profession_id]
      t.index [:profession_id, :name_basic_id]
    end
    add_foreign_key :name_basics_professions, :name_basics
    add_foreign_key :name_basics_professions, :professions
  end
end
