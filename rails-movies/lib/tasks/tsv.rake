#!/usr/bin/env ruby
namespace :tsv do

  desc "Download TSV file"
  task :download do
    output = `python3 lib/tasks/download.py`
    puts output
  end

  desc "Parse TSV file"
  task :parse => :environment do
    title_crews_data = Rake::Task['title_crews:parse'].invoke
    title_crews_data.each do |row|
      puts "tconst: #{row[:tconst]}"
      puts "Directors: #{row[:directors]}"
      puts "Writers: #{row[:writers]}"
      puts "----"
    end
  end
end
