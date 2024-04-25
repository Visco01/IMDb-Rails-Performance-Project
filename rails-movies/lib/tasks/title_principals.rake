#!/usr/bin/env ruby
namespace :title_principals do
    desc "Parse title.principals.tsv"
    task :parse => :environment do
        path = ENV['TSV_DIR'] || '../out'
        file = "#{path}/title.principals.tsv"

        TSV[file].each_with_index.map do |row, i|

            puts "Processing record #{i}" if (i % 10_000).zero?

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

                title_principals = TitlePrincipal.find_or_create_by(title_basic: title_basic,
                                                                    tconst: tconst,
                                                                    ordering: ordering,
                                                                    name_basic: name_basic,
                                                                    category: category,
                                                                    job: job,
                                                                    characters: characters)
            end
        rescue ActiveRecord::RecordNotFound
            next
        end
    end

    desc "Destroy Title Principals"
    task :destroy => :environment do
        TitlePrincipal.destroy_all
    end
end
