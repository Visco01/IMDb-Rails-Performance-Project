class SetUniqueFields < ActiveRecord::Migration[7.1]
  def change
    add_index :title_basics, :tconst, unique: true
    add_index :title_ratings, :tconst, unique: true
  end
end
