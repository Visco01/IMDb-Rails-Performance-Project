class CreateAttrs < ActiveRecord::Migration[7.1]
  def change
    create_table :attrs do |t|

      t.timestamps
    end
  end
end
