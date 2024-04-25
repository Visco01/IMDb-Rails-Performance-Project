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
    Rake::Task['title_akas:parse'].invoke
    Rake::Task['title_ratings:parse'].invoke
    Rake::Task['title_principals:parse'].invoke
    Rake::Task['title_episodes:parse'].invoke
    Rake::Task['title_crews:parse'].invoke
  end

  desc "Destroy DB data"
  task :destroy => :environment do
    Rake::Task['title_crews:destroy'].invoke
    Rake::Task['title_episodes:destroy'].invoke
    Rake::Task['title_principals:destroy'].invoke
    Rake::Task['title_ratings:destroy'].invoke
    Rake::Task['title_akas:destroy'].invoke
    Rake::Task['name_basics:destroy'].invoke
    Rake::Task['title_basics:destroy'].invoke
  end
end
