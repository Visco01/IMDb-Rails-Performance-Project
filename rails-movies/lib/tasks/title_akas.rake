#!/usr/bin/env ruby
namespace :title_akas do
  desc "Parse title.akas.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '/out'
    file = "#{path}/title.akas.tsv"
    
      TSV[file].each_with_index.map do |row, i|
        # break if i > 5
        
        puts "Processing record #{i}" if (i % 10_000).zero?

        titleId = row['titleId'][2..-1].to_i
        ordering = row['ordering']
        title = row['title']
        region = row['region']
        language = row['language']
        types = row['types'].split(',')
        attributes = row['attributes'].split(',')
        is_original_title = row['isOriginalTitle']
    
        begin
          title_basic = TitleBasic.find_by(tconst: titleId)
          unless title_basic.nil?
            puts title_basic.inspect
            title_akas = TitleAka.find_or_create_by(id: titleId,
                                    titleId: titleId,
                                    ordering: ordering,
                                    title: title,
                                    region: region,
                                    language: language,
                                    types: types,
                                    attributes: attributes,
                                    is_original_title: is_original_title)
            puts title_akas.inspect
            types.each do |type|
              title_akas.types << Type.find_or_create_by(name: type)
            end

            attributes.each do |attribute|
              title_akas.attributes << Attribute.find_or_create_by(name: attribute)
            end
          end
        rescue ActiveRecord::RecordNotFound
          next
        end
      end
    end

    desc "Destroy Title Akas"
    task :destroy => :enviroment do
      TitleAka.destroy_all
      Type.destroy_all
      Attribute.destroy_all
  end
end
