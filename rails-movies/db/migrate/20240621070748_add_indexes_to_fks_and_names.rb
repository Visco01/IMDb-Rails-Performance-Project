class AddIndexesToFksAndNames < ActiveRecord::Migration[7.1]
  def change
    add_index :title_basics, :primary_title unless index_exists?(:title_basics, :primary_title)
    add_index :title_basics, :runtime_minutes unless index_exists?(:title_basics, :runtime_minutes)
    add_index :title_basics, :is_adult unless index_exists?(:title_basics, :is_adult)
    add_index :genres, :name unless index_exists?(:genres, :name)
    # add_index :genres_title_basics, [:title_basic_id, :genre_id] unless index_exists?(:title_basics_genres, [:title_basic_id, :genre_id])
    add_index :name_basics, :primary_name unless index_exists?(:name_basics, :primary_name)
    add_index :professions, :name unless index_exists?(:professions, :name)
    add_index :name_basics_professions, [:name_basic_id, :profession_id] unless index_exists?(:name_basics_professions, [:name_basic_id, :profession_id])

    # add GIN indexes
    # enable_extension 'pg_trgm'
    # add_index :title_basics, :primary_title, using: :gin unless index_exists?(:title_basics, :primary_title, using: :gin)
    # add_index :title_basics, :runtime_minutes, using: :gin unless index_exists?(:title_basics, :runtime_minutes, using: :gin)
    # add_index :title_basics, :is_adult, using: :gin unless index_exists?(:title_basics, :is_adult, using: :gin)
    # add_index :genres, :name, using: :gin unless index_exists?(:genres, :name, using: :gin)
    # add_index :name_basics, :primary_name, using: :gin unless index_exists?(:name_basics, :primary_name, using: :gin)
    # add_index :professions, :name, using: :gin unless index_exists?(:professions, :name, using: :gin)
    # add_index :name_basics_professions, [:name_basic_id, :profession_id], using: :gin unless index_exists?(:name_basics_professions, [:name_basic_id, :profession_id], using: :gin)
  end
end
