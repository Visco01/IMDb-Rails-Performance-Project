class RenameTitleAkasAttrsToAttrsTitleAkas < ActiveRecord::Migration[7.1]
  def change
    rename_table :title_akas_attrs, :attrs_title_akas
  end
end
