#!/usr/bin/env ruby
namespace :title_akas do
  desc "Parse title.akas.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.akas.tsv"
    
    TSV[file].each_with_index.map do |row, i|
      # break if i > 5

      puts "Processing record #{i}" if (i % 10_000).zero?

      titleId = row['titleId'][2..-1].to_i
      ordering = row['ordering'].to_i
      title = row['title']
      region = row['region']
      language = row['language']
      types = row['types'].split(',')
      attributes = row['attributes'].split(',')
      is_original_title = row['isOriginalTitle'] == '1'

      begin
        title_basic = TitleBasic.find_by(id: titleId)
        next if title_basic.nil?

        title_aka = TitleAka.find_or_create_by(title_basic: title_basic,
                                      title_id: title_basic.id,
                                      ordering: ordering,
                                      title: title,
                                      region: region,
                                      language: language,
                                      is_original_title: is_original_title)

        types.each do |type|
          title_aka.types << Type.find_or_create_by(name: type)
        end

        attributes.each do |attr|
          title_aka.attrs << Attr.find_or_create_by(name: attr)
        end

      rescue ActiveRecord::RecordNotFound
        next
      end
    end
  end

  desc "Destroy Title Akas"
  task :destroy => :environment do
    TitleAka.destroy_all
    Type.destroy_all
    Attr.destroy_all
  end
end
