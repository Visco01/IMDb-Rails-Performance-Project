#!/usr/bin/env ruby
namespace :tsv do

  desc "Download TSV file"
  task :download do
    output = `python3 lib/tasks/download.py`
    puts output
  end

  desc "Parse TSV file"
  task :parse do
    path = '../out/title.basics.tsv'

    TSV[path].each_with_index.map do |row, i|
      break if i > 10

      puts row['primaryTitle']
    end

    parsed = TSV.parse_file(path)
    puts parsed.size

    # puts TSV.parse_file("../out/title.basics.tsv").without_header.first.to_h
  end
end
