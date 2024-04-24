class AddJoinTableTitleAkasAttrs < ActiveRecord::Migration[7.1]
  def change
    create_join_table :title_akas, :attrs, table_name: "title_akas_attrs" do |t|
      t.index [:title_aka_id, :attr_id]
      t.index [:attr_id, :title_aka_id]
    end
    add_foreign_key :title_akas_attrs, :title_akas
    add_foreign_key :title_akas_attrs, :attrs
  end
end
