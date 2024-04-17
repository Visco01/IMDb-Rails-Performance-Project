#!/usr/bin/env ruby
namespace :title_basics do
  desc "Parse title.basics.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.basics.tsv"

    TitleBasic.destroy_all
    Genre.destroy_all

    TSV[file].each_with_index.map do |row, i|
      # break if i > 5

      puts row.inspect
      tconst = row['tconst'][2..-1].to_i
      title_type = row['titleType']
      primary_title = row['primaryTitle']
      original_title = row['originalTitle']
      is_adult = row['isAdult']
      start_year = row['startYear']
      end_year = row['endYear']
      runtime_minutes = row['runtimeMinutes']
      genres = row['genres'].split(',')

      begin
        title_basic = TitleBasic.find_or_create_by(id: tconst,
                                  tconst: tconst,
                                  title_type: title_type,
                                  primary_title: primary_title,
                                  original_title: original_title,
                                  is_adult: is_adult,
                                  start_year: start_year,
                                  end_year: end_year,
                                  runtime_minutes: runtime_minutes)

        genres.each do |genre|
          title_basic.genres << Genre.find_or_create_by(name: genre)
        end
      rescue StandardError => e
        puts "Error: #{e.message}"
      end
    end
  end
end
