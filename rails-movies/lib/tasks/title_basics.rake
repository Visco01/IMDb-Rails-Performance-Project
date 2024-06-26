#!/usr/bin/env ruby
namespace :title_basics do
  desc "Parse title.basics.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.basics.tsv"

    start_time = Time.now
    slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i

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

            genres.each do |genre|
              title_basic.genres << Genre.find_or_create_by(name: genre)
            end
          rescue ActiveRecord::StatementInvalid
            next
          end
        end
      end
    end
  end

  desc "Generate title.basics.queryset.csv"
  task :generate_queryset => :environment do
    path = ENV['QUERYSET_DIR'] || './querysets'
    file = "#{path}/title.basics.titles.queryset.csv"

    puts 'Generating title.basics.titles.queryset.csv'

    Dir.mkdir(path) unless File.directory?(path)

    title_ratings = TitleRating.select(:id,
                                        :tconst,
                                        :average_rating,
                                        :num_votes)
                               .joins(:title_basic)
                               .order('num_votes DESC')

    total_votes = title_ratings.sum(:num_votes)
    probabilities = title_ratings.map { |tr| tr.num_votes.to_f / total_votes }
    cdf = probabilities.map.with_index { |p, i| probabilities[0..i].sum }

    queries = []
    num_queries = 10_000

    num_queries.times do
      random_number = rand
      index = cdf.find_index { |p| p >= random_number }
      title_basic_name = title_ratings[index].title_basic.primary_title

      # Generate query string
      queries << title_basic_name
    end

    CSV.open(file, "w") do |csv|
      queries.each { |query| csv << [query] }
    end

    puts "Generated #{file}"
  end

  desc "Generate title.basics.queryset.csv by genre, adult, and runtime"
  task :generate_params_queryset => :environment do
    path = ENV['QUERYSET_DIR'] || './querysets'
    file = "#{path}/title.basics.params.queryset.csv"

    puts 'Generating title.basics.params.queryset.csv'

    Dir.mkdir(path) unless File.directory?(path)

    genres = GenrePopularity.all
    adult = [true, false]
    runtime_minutes = TitleBasic.select(:runtime_minutes).distinct.pluck(:runtime_minutes)

    total_popularity = genres.sum(:popularity)
    probabilities = genres.map { |g| g.popularity.to_f / total_popularity }
    cdf = probabilities.map.with_index { |p, i| probabilities[0..i].sum }

    queries = []
    num_queries = 10_000

    num_queries.times do
      random_number = rand
      index = cdf.find_index { |p| p >= random_number }
      genre = genres[index]

      # Generate query string
      queries << [genre.name, adult.sample, runtime_minutes.sample]
    end

    CSV.open(file, "w") do |csv|
      queries.each { |query| csv << query }
    end

    puts "Generated #{file}"
  end
  desc "Destroy Title Basics"
  task :destroy => :environment do
    TitleBasic.destroy_all
    Genre.destroy_all
  end
end
