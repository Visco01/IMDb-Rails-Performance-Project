#!/usr/bin/env ruby
namespace :title_episodes do
  desc "Parse title.episode.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.episode.tsv"

    start_time = Time.now

    TSV[file].each_with_index.map do |row, i|
      # break if i > 5

      puts "Title Episodes: Processing record #{i} and time elapsed: #{Time.now - start_time}" if (i % 10_000).zero?

      tconst = row['tconst'][2..-1].to_i
      parent_tconst = row['parentTconst'][2..-1].to_i
      season_number = row['seasonNumber']
      episode_number = row['episodeNumber']

      begin
        title_basics = TitleBasic.find_by(tconst: parent_tconst)
        next if title_basics.nil?

        title_episode = TitleEpisode.new(title_basic: title_basics,
                                          tconst: tconst,
                                          season_number: season_number,
                                          episode_number: episode_number)

        title_episode.save!
      end
    rescue ActiveRecord::RecordNotUnique
      next
    end
  end

  desc "Destroy Title Episodes"
  task :destroy => :environment do
    TitleEpisode.destroy_all
  end
end
