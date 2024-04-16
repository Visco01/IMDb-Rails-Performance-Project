#!/usr/bin/env ruby
namespace :title_akas do
  desc "Parse title.akas.tsv"
  task :parse do
    path = ENV['TSV_DIR'] || '/out'
    puts path
  end
end
