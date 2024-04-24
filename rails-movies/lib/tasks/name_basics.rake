#!/usr/bin/env ruby
namespace :name_basics do
  desc "Parse name.basics.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/name.basics.tsv"

    TSV[file].each_with_index.map do |row, i|
      # break if i > 5

      puts "Processing record #{i}" if (i % 10_000).zero?

      nconst = row['nconst'][2..-1].to_i
      primary_name = row['primaryName']
      birth_year = row['birthYear']
      death_year = row['deathYear']
      primary_profession = row['primaryProfession'].split(',')
      known_for_titles = row['knownForTitles'].split(',')

      begin
        name_basic = NameBasic.find_or_create_by(id: nconst,
                                  nconst: nconst,
                                  primary_name: primary_name,
                                  birth_year: birth_year,
                                  death_year: death_year)

        primary_profession.each do |profession|
          name_basic.professions << Profession.find_or_create_by(name: profession)
        end

        known_for_titles.each do |title|
          title_basic = TitleBasic.find_by(tconst: title)
          # REMOVE THIS CHECK
          name_basic.title_basics << title_basic unless title_basic.nil?
        end
      rescue ActiveRecord::RecordNotFound
        next
      end
    end
  end
end
