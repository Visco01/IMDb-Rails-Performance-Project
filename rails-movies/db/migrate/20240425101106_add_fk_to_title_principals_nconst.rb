class AddFkToTitlePrincipalsNconst < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :title_principals, :name_basics, column: :nconst
  end
end
