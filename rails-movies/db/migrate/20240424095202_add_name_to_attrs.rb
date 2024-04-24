class AddNameToAttrs < ActiveRecord::Migration[7.1]
  def change
    add_column :attrs, :name, :string
  end
end
