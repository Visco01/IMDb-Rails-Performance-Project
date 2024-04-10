class CreateTitleRatings < ActiveRecord::Migration[7.1]
  def change
    create_table :title_ratings do |t|
      t.integer :tconst
      t.float :average_rating
      t.integer :num_votes

      t.timestamps
    end
  end
end
