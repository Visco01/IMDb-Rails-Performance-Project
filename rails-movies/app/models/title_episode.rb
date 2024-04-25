class TitleEpisode < ApplicationRecord
  belongs_to :title_basic, foreign_key: "parent_tconst"
end
