class TitleBasic < ApplicationRecord
  has_one :title_aka
  has_many :title_ratings
  has_and_belongs_to_many :genres
  has_many :title_principals
  has_and_belongs_to_many :name_basics
end
