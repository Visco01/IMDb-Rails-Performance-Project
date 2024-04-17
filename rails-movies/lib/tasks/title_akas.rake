#!/usr/bin/env ruby
namespace :title_akas do
  desc "Parse title.akas.tsv"
  task :parse => :environment do
    path = ENV['TSV_DIR'] || '/out'
    puts path
  end
end
