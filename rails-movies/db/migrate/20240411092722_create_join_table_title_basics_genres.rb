class CreateJoinTableTitleBasicsGenres < ActiveRecord::Migration[7.1]
  def change
    create_join_table :title_basics, :genres do |t|
      t.index [:title_basic_id, :genre_id]
      t.index [:genre_id, :title_basic_id]
    end
  end
end
