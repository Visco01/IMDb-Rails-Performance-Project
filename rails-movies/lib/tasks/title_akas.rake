#!/usr/bin/env ruby
namespace :title_akas do
  desc "Parse title.akas.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '../out'
    file = "#{path}/title.akas.tsv"

    start_time = Time.now
    slice_length = (ENV['TRANSACTION_LENGTH'] || 100_000).to_i

    # TSV[file].each_with_index.map do |row, i|
    # break if i > 5
    TSV[file].each_slice(slice_length).with_index do |batch, batch_index|
      ActiveRecord::Base.transaction do
        batch.each_with_index do |row, i|
          record_index = batch_index * slice_length + i

          puts "Title Akas: Processing record #{record_index} and time elapsed: #{Time.now - start_time}" if (record_index % slice_length).zero?

          title_id = row['titleId'][2..-1].to_i
          ordering = row['ordering'].to_i
          title = row['title']
          region = row['region']
          language = row['language']
          types = row['types'].split(',')
          attributes = row['attributes'].split(',')
          is_original_title = row['isOriginalTitle'] == '1'

          begin
            title_basic = TitleBasic.find_by(tconst: title_id)
            next if title_basic.nil?

            title_aka = TitleAka.create(
              title_basic: title_basic,
              ordering: ordering,
              title: title,
              region: region,
              language: language,
              is_original_title: is_original_title
            )

            types.each do |type|
              title_aka.types << Type.find_or_create_by(name: type)
            end

            attributes.each do |attr|
              title_aka.attrs << Attr.find_or_create_by(name: attr)
            end

            title_aka.save!
          rescue ActiveRecord::StatementInvalid
            next
          end
        end
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
