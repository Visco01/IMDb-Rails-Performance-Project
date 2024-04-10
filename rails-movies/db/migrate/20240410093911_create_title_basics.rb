class CreateTitleBasics < ActiveRecord::Migration[7.1]
  def change
    create_table :title_basics do |t|
      t.integer :tconst
      t.string :title_type
      t.string :primary_title
      t.string :original_title
      t.boolean :is_adult
      t.integer :start_year
      t.integer :end_year
      t.integer :runtime_minutes

      t.timestamps
    end
  end
end
