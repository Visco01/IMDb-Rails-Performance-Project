class RemoveAttrsTable < ActiveRecord::Migration[7.1]
  def change
    drop_table :attributes_title_akas
    drop_table :attrs
  end
end
