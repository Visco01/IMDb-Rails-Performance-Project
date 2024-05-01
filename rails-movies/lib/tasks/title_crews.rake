#!/usr/bin/env ruby
namespace :title_crews do
  desc "Parse title.crews.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.crew.tsv"

    start_time = Time.now
    slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i
    slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i

    # TSV[file].each_with_index.map do |row, i|
    TSV[file].each_slice(slice_length).with_index do |batch, batch_index|
      ActiveRecord::Base.transaction do
        batch.each_with_index do |row, i|
          record_index = batch_index * slice_length + i
          puts "Title Basics: Processing record #{record_index} and time elapsed: #{Time.now - start_time}" if (record_index % slice_length).zero?

          tconst = row['tconst'][2..-1].to_i
          director_ids = row['directors'].split(',').reject { |id| id == '\N' }
          writer_ids = row['writers'].split(',').reject { |id| id == '\N' }

          begin
            title_basic = TitleBasic.find_by(tconst: tconst)
            next if title_basic.nil?
          begin
            title_basic = TitleBasic.find_by(tconst: tconst)
            next if title_basic.nil?

            title_crew = TitleCrew.new(title_basic: title_basic, tconst: tconst)

            title_crew.save!

            director_ids.each do |director_id|
              director = NameBasic.find_by(nconst: director_id[2..-1].to_i)
              next if director.nil?

              title_crew.directors << director unless title_crew.directors.include?(director)
            end

            writer_ids.each do |writer_id|
              writer = NameBasic.find_by(nconst: writer_id[2..-1].to_i)
              next if writer.nil?

              title_crew.writers << writer unless title_crew.writers.include?(writer)
            end

            title_crew.save!

          rescue ActiveRecord::StatementInvalid
            next
          end
        end
      end
    end
  end

  desc "Destroy Title Crews"
  task :destroy => :environment do
    TitleCrew.destroy_all
  end
end
