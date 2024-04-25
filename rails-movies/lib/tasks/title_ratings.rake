#TODO: check if relations are ok (title_rating.rb)

#!/usr/bin/env ruby
namespace :title_ratings do
  desc "Parse title.ratings.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.ratings.tsv"

    TSV[file].each_with_index.map do |row, i|
      # break if i > 5

      puts "Processing record #{i}" if (i % 10_000).zero?

      tconst = row['tconst'][2..-1].to_i
      average_rating = row['averageRating'].to_f
      num_votes = row['numVotes'].to_i

      begin
        title_basic = TitleBasic.find_by(tconst: tconst)
        next if title_basic.nil?

        title_ratings = TitleRating.find_or_create_by(title_basic: title_basic,
                                                      tconst: tconst,
                                                      average_rating: average_rating,
                                                      num_votes: num_votes)
      end
    rescue ActiveRecord::RecordNotFound
      next
    end
  end
end
