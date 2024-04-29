#!/usr/bin/env ruby
namespace :title_principals do
    desc "Parse title.principals.tsv"
    task :parse => :environment do
        path = ENV['TSV_DIR'] || '../out'
        file = "#{path}/title.principals.tsv"

        start_time = Time.now

        TSV[file].each_with_index.map do |row, i|

            puts "Title Principals: Processing record #{i} and time elapsed: #{Time.now - start_time}" if (i % 10_000).zero?

            tconst = row['tconst'][2..-1].to_i
            ordering = row['ordering'].to_i
            nconst = row['nconst'][2..-1].to_i
            category = row['category']
            job = row['job']
            characters = row['characters'][2..-3]

            begin
                title_basic = TitleBasic.find_by(tconst: tconst)
                name_basic = NameBasic.find_by(nconst: nconst)
                next if title_basic.nil? || name_basic.nil?

                title_principal = TitlePrincipal.new(title_basic: title_basic,
                                                     tconst: tconst,
                                                     ordering: ordering,
                                                     name_basic: name_basic,
                                                     category: category,
                                                     job: job,
                                                     characters: characters)

                title_principal.save!
            end
        rescue ActiveRecord::RecordNotUnique
            next
        end
    end

    desc "Destroy Title Principals"
    task :destroy => :environment do
        TitlePrincipal.destroy_all
    end
end
