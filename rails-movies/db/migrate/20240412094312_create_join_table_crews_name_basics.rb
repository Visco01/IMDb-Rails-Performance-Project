class CreateJoinTableCrewsNameBasics < ActiveRecord::Migration[7.1]
  def change
    create_join_table :crews, :name_basics, table_name: "writers" do |t|
      t.index [:crew_id, :name_basic_id]
      t.index [:name_basic_id, :crew_id]
    end
    add_foreign_key :writers, :crews
    add_foreign_key :writers, :name_basics

    create_join_table :crews, :name_basics, table_name: "directors" do |t|
      t.index [:crew_id, :name_basic_id]
      t.index [:name_basic_id, :crew_id]
    end
    add_foreign_key :directors, :crews
    add_foreign_key :directors, :name_basics
  end
end
