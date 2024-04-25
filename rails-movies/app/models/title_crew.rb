class TitleCrew < ApplicationRecord
  has_and_belongs_to_many :writers,
                          class_name: "NameBasic",
                          join_table: "writers"
  has_and_belongs_to_many :directors,
                          class_name: "NameBasic",
                          join_table: "directors"
  belongs_to :title_basic, foreign_key: "id"
end
