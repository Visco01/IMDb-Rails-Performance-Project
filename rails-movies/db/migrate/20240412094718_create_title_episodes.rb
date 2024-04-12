class CreateTitleEpisodes < ActiveRecord::Migration[7.1]
  def change
    create_table :title_episodes do |t|
      t.integer :tconst
      t.integer :parent_tconst
      t.integer :season_number
      t.integer :episode_number

      t.timestamps
    end
  end
end
