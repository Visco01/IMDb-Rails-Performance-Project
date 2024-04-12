class CreateJoinTableNameBasicsTitleBasics < ActiveRecord::Migration[7.1]
  def change
    create_join_table :name_basics, :title_basics do |t|
      t.index [:name_basic_id, :title_basic_id]
      t.index [:title_basic_id, :name_basic_id]
    end
    add_foreign_key :name_basics_title_basics, :name_basics
    add_foreign_key :name_basics_title_basics, :title_basics
  end
end
