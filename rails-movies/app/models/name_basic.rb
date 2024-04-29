class NameBasic < ApplicationRecord
  # belongs_to :title_crews
  has_and_belongs_to_many :professions
  has_and_belongs_to_many :title_basics,
                          class_name: "TitleBasic",
                          join_table: "name_basics_title_basics"
end
