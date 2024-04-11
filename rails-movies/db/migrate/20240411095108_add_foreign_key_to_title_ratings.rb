class AddForeignKeyToTitleRatings < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :title_ratings, :title_basics, column: :id, primary_key: :id
  end
end
