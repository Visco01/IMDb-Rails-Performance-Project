class RemoveUniqueTitleAkasTitleIdColumn < ActiveRecord::Migration[7.1]
  def change
    remove_index :title_akas, :title_id
  end
end
