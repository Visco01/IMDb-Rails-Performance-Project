class TitleBasic < ApplicationRecord
  has_many :title_ratings
  has_and_belongs_to_many :genres
end
