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

            primary_profession.each do |profession|
              name_basic.professions << Profession.find_or_create_by(name: profession)
            end

            known_for_titles.each do |title|
              title_basic = TitleBasic.find_by(tconst: title[2..-1].to_i)
              next if title_basic.nil?

              name_basic.title_basics << title_basic
            end
          rescue ActiveRecord::StatementInvalid
            next
          end
        end
      end
    end
  end

  desc "Generate directors.queryset.csv"
  task :generate_directors_queryset => :environment do
    path = ENV['QUERYSET_DIR'] || './querysets'
    file = "#{path}/directors.queryset.csv"

    puts 'Generating directors.queryset.csv'

    Dir.mkdir(path) unless File.directory?(path)

    directors = DirectorWithRating.all

    total_votes = directors.sum(:ratings)
    probabilities = directors.map { |director| director.ratings.to_f / total_votes }
    cdf = probabilities.map.with_index { |p, i| probabilities[0..i].sum }

    queries = []
    num_queries = 10_000

    num_queries.times do
      puts "Generating query #{queries.size}" if (queries.size % 1000).zero?

      random_number = rand
      index = cdf.find_index { |p| p >= random_number }
      director = directors[index]

      # Generate query string
      queries << director.primary_name
    end

    CSV.open(file, "w") do |csv|
      queries.each { |query| csv << [query] }
    end
  end

  desc "Generate actors.queryset.csv"
  task :generate_actors_queryset => :environment do
    path = ENV['QUERYSET_DIR'] || './querysets'
    file = "#{path}/actors.queryset.csv"

    puts 'Generating actors.queryset.csv'

    Dir.mkdir(path) unless File.directory?(path)

    actors = ActorWithRating.all

    total_votes = actors.sum(:ratings)
    puts "Total votes: #{total_votes}"
    probabilities = actors.map { |actor| actor.ratings.to_f / total_votes }.compact

    cdf = probabilities.map.with_index { |p, i|
      puts "CDF #{i} done." if (i % 10_000).zero?
      probabilities[0..i].sum
    }.compact
    puts "CDF done."

    queries = []
    num_queries = 10_000

    num_queries.times do
      puts "Generating query #{queries.size}" if (queries.size % 1000).zero?

      random_number = rand
      index = cdf.find_index { |p| p >= random_number }

      if index.nil?
        puts "Index is nil"
        num_queries += 1
        next
      end

      actor = actors[index]

      # Generate query string
      queries << actor.primary_name
    end

    CSV.open(file, "w") do |csv|
      queries.each { |query| csv << [query] }
    end
  end

  desc "Destroy Name Basics"
  task :destroy => :environment do
    NameBasic.destroy_all
    Profession.destroy_all
    NameBasic.connection.execute("DELETE FROM name_basics_title_basics")
  end
end
