#!/usr/bin/env ruby
namespace :name_basics do
  desc "Parse name.basics.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/name.basics.tsv"

    start_time = Time.now
    slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i

    TSV[file].each_slice(slice_length).with_index do |batch, batch_index|
      ActiveRecord::Base.transaction do
        batch.each_with_index do |row, i|
          record_index = batch_index * slice_length + i

          puts "Name Basics: Processing record #{record_index} and time elapsed: #{Time.now - start_time}" if (record_index % 10_000).zero?

          nconst = row['nconst'][2..-1].to_i
          primary_name = row['primaryName']
          birth_year = row['birthYear']
          death_year = row['deathYear']
          primary_profession = row['primaryProfession'].split(',')
          known_for_titles = row['knownForTitles'].split(',')

          begin
            name_basic = NameBasic.create(
              id: nconst,
              nconst: nconst,
              primary_name: primary_name,
              birth_year: birth_year,
              death_year: death_year
            )

            name_basic.save!

            primary_profession.each do |profession|
              name_basic.professions << Profession.find_or_create_by(name: profession)
            end

            known_for_titles.each do |title|
              title_basic = TitleBasic.find_by(tconst: title[2..-1].to_i)
              # REMOVE THIS CHECK
              name_basic.title_basics << title_basic unless title_basic.nil?
            end
          rescue ActiveRecord::StatementInvalid
            next
          end
        end
      end
    end
  end

  desc "Destroy Name Basics"
  task :destroy => :environment do
    NameBasic.destroy_all
    Profession.destroy_all
    NameBasic.connection.execute("DELETE FROM name_basics_title_basics")
  end
end
