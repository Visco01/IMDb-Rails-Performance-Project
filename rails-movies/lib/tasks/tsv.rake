#!/usr/bin/env ruby
namespace :tsv do

  desc "Download TSV file"
  task :download do
    output = `python3 lib/tasks/download.py`
    puts output
  end

  desc "Import TSV file"
  task :import => :environment do
    Rake::Task['title_basics:parse'].invoke
    Rake::Task['name_basics:parse'].invoke
  end
end
