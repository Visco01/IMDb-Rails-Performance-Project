class AddForeignKeysToJoinTable < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :genres_title_basics, :title_basics
    add_foreign_key :genres_title_basics, :genres
  end
end
