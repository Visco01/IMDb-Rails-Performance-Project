class TitlePrincipal < ApplicationRecord
  belongs_to :title_basic, foreign_key: "tconst"
  belongs_to :name_basic, foreign_key: "nconst"
end
