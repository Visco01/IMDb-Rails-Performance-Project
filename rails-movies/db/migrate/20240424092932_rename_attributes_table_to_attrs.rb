class RenameAttributesTableToAttrs < ActiveRecord::Migration[7.1]
  def change
    rename_table :attributes, :attrs
  end
end
