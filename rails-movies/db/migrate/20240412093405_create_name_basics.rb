class CreateNameBasics < ActiveRecord::Migration[7.1]
  def change
    create_table :name_basics do |t|
      t.integer :nconst
      t.string :primary_name
      t.integer :birth_year
      t.integer :death_year

      t.timestamps

      t.index :nconst, unique: true
    end

    change_column_null :name_basics, :nconst, false
  end
end
