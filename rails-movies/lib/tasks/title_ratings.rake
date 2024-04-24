#!/usr/bin/env ruby
namespace :title_ratings do
    desc "Parse title.ratings.tsv"
    task :parse => :environment do
        path = ENV['TSV_DIR'] || '../out'