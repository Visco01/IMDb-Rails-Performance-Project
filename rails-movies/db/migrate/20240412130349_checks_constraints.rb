class ChecksConstraints < ActiveRecord::Migration[7.1]
  def change
    change_column_null :title_akas, :title_id, false
    change_column_null :types, :name, false
    change_column_null :attributes, :name, false
    # rename_table :crews, :title_crews
    change_column_null :crews, :tconst, false
    add_foreign_key :crews, :title_basics, column: :id
    change_column_null :title_episodes, :tconst, false
    change_column_null :title_principals, :tconst, false
    change_column_null :title_principals, :nconst, false
    change_column_null :name_basics, :primary_name, false
    change_column_null :name_basics, :birth_year, false
    change_column_null :professions, :name, false
  end
end
