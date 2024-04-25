class AddFkToTitleEpisodesParentTconst < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :title_episodes, :title_basics, column: :parent_tconst
  end
end
