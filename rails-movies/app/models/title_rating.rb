class TitleRating < ApplicationRecord
  belongs_to :title_basic, foreign_key: "id"
end
