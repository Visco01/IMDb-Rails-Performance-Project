class AddForeignKeysToAttributesAndTypesJoinTables < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :attributes_title_akas, :title_akas
    add_foreign_key :attributes_title_akas, :attributes
    add_foreign_key :title_akas_types, :title_akas
    add_foreign_key :title_akas_types, :types
  end
end
