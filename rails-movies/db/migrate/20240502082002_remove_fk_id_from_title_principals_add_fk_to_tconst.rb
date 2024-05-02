class RemoveFkIdFromTitlePrincipalsAddFkToTconst < ActiveRecord::Migration[7.1]
  def change
    remove_foreign_key :title_principals, :title_basics, column: :id
    add_foreign_key :title_principals, :title_basics, column: :tconst
  end
end
