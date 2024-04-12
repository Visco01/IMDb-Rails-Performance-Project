class AddForeignKeyTitlePrincipalsToTitleBasics < ActiveRecord::Migration[7.1]
  def change
    add_foreign_key :title_principals, :title_basics, column: :id
  end
end
