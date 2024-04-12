class CreateTitlePrincipals < ActiveRecord::Migration[7.1]
  def change
    create_table :title_principals do |t|
      t.integer :tconst
      t.integer :ordering
      t.integer :nconst
      t.string :category
      t.string :job
      t.string :characters

      t.timestamps
    end
  end
end
