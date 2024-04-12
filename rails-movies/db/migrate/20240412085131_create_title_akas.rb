class CreateTitleAkas < ActiveRecord::Migration[7.1]
  def change
    create_table :title_akas do |t|
      t.integer :title_id
      t.integer :ordering
      t.string :title
      t.string :region
      t.string :language
      t.boolean :is_original_title

      t.timestamps

      t.index :title_id, unique: true
    end

    add_foreign_key :title_akas, :title_basics, column: :id
  end
end
