#!/usr/bin/env ruby
namespace :title_principals do
    desc "Parse title.principals.tsv"
    task :parse => :environment do
        path = ENV['TSV_DIR'] || '../out'
        file = "#{path}/title.principals.tsv"

        start_time = Time.now
        slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i

        TSV[file].each_slice(slice_length).with_index do |batch, batch_index|
            ActiveRecord::Base.transaction do
                batch.each_with_index do |row, i|
                    record_index = batch_index * slice_length + i

                    puts "Title Basics: Processing record #{record_index} and time elapsed: #{Time.now - start_time}" if (record_index % slice_length).zero?

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

                        title_principal = TitlePrincipal.new(
                            title_basic: title_basic,
                            tconst: tconst,
                            ordering: ordering,
                            name_basic: name_basic,
                            category: category,
                            job: job,
                            characters: characters
                        )

                        title_principal.save!
                    end
                rescue ActiveRecord::StatementInvalid
                    next
                end
            end
        end
    end

    desc "Destroy Title Principals"
    task :destroy => :environment do
        TitlePrincipal.destroy_all
    end
end
