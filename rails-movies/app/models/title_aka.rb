class TitleAka < ApplicationRecord
  belongs_to :title_basic, foreign_key: "title_id"
  has_and_belongs_to_many :types
  has_and_belongs_to_many :attrs
end
