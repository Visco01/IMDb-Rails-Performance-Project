#!/usr/bin/env ruby
namespace :title_episodes do
  desc "Parse title.episode.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.episode.tsv"

    TSV[file].each_with_index.map do |row, i|
      # break if i > 5
      
      puts "Processing record #{i}" if (i % 10_000).zero?
      
      tconst = row['tconst'][2..-1].to_i
      parent_tconst = row['parentTconst'][2..-1].to_i
      season_number = row['seasonNumber']
      episode_number = row['episodeNumber']
      
      begin
        title_basics = TitleBasic.find_by(tconst: parent_tconst)
        next if title_basics.nil?
        
        title_episode = TitleEpisode.find_or_create_by(id: tconst,
                                                       tconst: tconst,
                                                       title_basic: title_basics,
                                                       season_number: season_number,
                                                       episode_number: episode_number)
      end
    rescue ActiveRecord::RecordNotFound
      next
    end
  end

  desc "Destroy Title Episodes"
  task :destroy => :environment do
    TitleEpisode.destroy_all
  end
end
