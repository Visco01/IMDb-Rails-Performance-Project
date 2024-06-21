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
  end
end
