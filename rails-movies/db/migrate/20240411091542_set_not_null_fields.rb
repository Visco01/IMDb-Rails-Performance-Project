class SetNotNullFields < ActiveRecord::Migration[7.1]
  def change
    change_column_null :title_basics, :tconst, false
    change_column_null :title_ratings, :tconst, false
    change_column_null :genres, :name, false
  end
end
