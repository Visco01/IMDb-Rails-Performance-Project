#!/usr/bin/env ruby
namespace :title_ratings do
  desc "Parse title.ratings.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.ratings.tsv"

    TSV[file].each_with_index.map do |row, i|
      break if i > 5

      puts "Processing record #{i}" if (i % 10_000).zero?

      tconst = row['tconst'][2..-1].to_i
      average_rating = row['averageRating']
      num_votes = row['numVotes']

      begin
        title_basic = TitleBasic.find_by(tconst: tconst)
        title_rating = TitleRating.find_or_create_by(id: tconst,
                                  tconst: tconst,
                                  average_rating: average_rating,
                                  num_votes: num_votes) unless title_basic.nil?
      rescue ActiveRecord::RecordNotFound
        next
      end
    end
  end
end
