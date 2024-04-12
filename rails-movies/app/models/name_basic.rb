class NameBasic < ApplicationRecord
  has_and_belongs_to_many :title_crews
  has_and_belongs_to_many :professions
  has_and_belongs_to_many :title_basics
end
