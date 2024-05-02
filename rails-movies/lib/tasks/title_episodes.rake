#!/usr/bin/env ruby
namespace :title_episodes do
  desc "Parse title.episode.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.episode.tsv"

    start_time = Time.now

    # TSV[file].each_with_index.map do |row, i|
      # break if i > 5
    slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i

    TSV[file].each_slice(slice_length).with_index do |batch, batch_index|
      ActiveRecord::Base.transaction do
        batch.each_with_index do |row, i|
          record_index = batch_index * slice_length + i

          puts "Title Episodes: Processing record #{record_index} and time elapsed: #{Time.now - start_time}" if (record_index % slice_length).zero?

          tconst = row['tconst'][2..-1].to_i
          parent_tconst = row['parentTconst'][2..-1].to_i
          season_number = row['seasonNumber']
          episode_number = row['episodeNumber']

          begin
            title_basics = TitleBasic.find_by(tconst: parent_tconst)
            next if title_basics.nil?

            TitleEpisode.create(
              title_basic: title_basics,
              tconst: tconst,
              season_number: season_number,
              episode_number: episode_number
            )
          rescue ActiveRecord::StatementInvalid
            next
          end
        end
      end
    end
  end

  desc "Destroy Title Episodes"
  task :destroy => :environment do
    TitleEpisode.destroy_all
  end
end
