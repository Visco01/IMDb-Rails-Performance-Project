#TODO: check if relations are ok (title_rating.rb)

#!/usr/bin/env ruby
namespace :title_ratings do
  desc "Parse title.ratings.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.ratings.tsv"

    start_time = Time.now
    slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i
    # TSV[file].each_with_index.map do |row, i|
      # break if i > 5
    TSV[file].each_slice(slice_length).with_index do |batch, batch_index|
      ActiveRecord::Base.transaction do
        batch.each_with_index do |row, i|
          record_index = batch_index * slice_length + i

          puts "Title Ratings: Processing record #{record_index} and time elapsed: #{Time.now - start_time}" if (record_index % slice_length).zero?

          tconst = row['tconst'][2..-1].to_i
          average_rating = row['averageRating'].to_f
          num_votes = row['numVotes'].to_i

          begin
            title_basic = TitleBasic.find_by(tconst: tconst)
            next if title_basic.nil?

            TitleRating.create(title_basic: title_basic,
                                            tconst: tconst,
                                            average_rating: average_rating,
                                            num_votes: num_votes)
          rescue ActiveRecord::StatementInvalid
            next
          end
        end
      end
    end
  end

  desc "Destroy title.ratings.tsv data"
  task :destroy => :environment do
    TitleRating.destroy_all
  end
end
