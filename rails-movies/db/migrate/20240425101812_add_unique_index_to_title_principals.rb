class AddUniqueIndexToTitlePrincipals < ActiveRecord::Migration[7.1]
  def change
    add_index :title_principals, [:id, :nconst], unique: true, name: 'unique_principal_index'
  end
end
