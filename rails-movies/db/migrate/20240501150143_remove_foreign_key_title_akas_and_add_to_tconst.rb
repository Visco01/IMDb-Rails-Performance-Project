class RemoveForeignKeyTitleAkasAndAddToTconst < ActiveRecord::Migration[7.1]
  def change
    remove_foreign_key :title_akas, :title_basics
    add_foreign_key :title_akas, :title_basics, column: :title_id
  end
end
