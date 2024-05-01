#!/usr/bin/env ruby
namespace :title_basics do
  desc "Parse title.basics.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.basics.tsv"

    start_time = Time.now
    slice_length = ENV['TRANSACTION_LENGTH'] || 100_000

    TSV[file].each_slice(slice_length).with_index do |batch, batch_index|
      ActiveRecord::Base.transaction do
        batch.each_with_index do |row, i|
          record_index = batch_index * slice_length + i

          puts "Title Basics: Processing record #{record_index} and time elapsed: #{Time.now - start_time}" if (record_index % slice_length).zero?

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
            title_basic = TitleBasic.create(
              id: tconst,
              tconst: tconst,
              title_type: title_type,
              primary_title: primary_title,
              original_title: original_title,
              is_adult: is_adult,
              start_year: start_year,
              end_year: end_year,
              runtime_minutes: runtime_minutes
            )

            title_basic.save!

            genres.each do |genre|
              title_basic.genres << Genre.find_or_create_by(name: genre)
            end
          rescue ActiveRecord::RecordNotUnique
            next
          end
        end
      end
    end
  end

  desc "Destroy Title Basics"
  task :destroy => :environment do
    TitleBasic.destroy_all
    Genre.destroy_all
  end
end
