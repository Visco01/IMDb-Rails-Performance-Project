class CreateCrews < ActiveRecord::Migration[7.1]
  def change
    create_table :crews do |t|
      t.integer :tconst

      t.timestamps
    end
  end
end
