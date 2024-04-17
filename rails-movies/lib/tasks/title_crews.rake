#!/usr/bin/env ruby
namespace :title_crews do
  desc "Parse title.crews.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.crew.tsv"

    data = []

    TSV[file].each_with_index.map do |row, i|
      tconst = row['tconst'][2..-1].to_i
      director_ids = row['directors'].split(',').reject { |id| id == '\N' }
      writer_ids = row['writers'].split(',').reject { |id| id == '\N' }

      directors = director_ids.map do |director_id|
        Director.new(name_basic_id: director_id[2..-1].to_i, title_crew_id: tconst)
      end

      writers = writer_ids.map do |writer_id|
        Writer.new(name_basic_id: writer_id[2..-1].to_i, title_crew_id: tconst)
      end

      data << { tconst: tconst, directors: directors, writers: writers }
    end
    data
  end
end
