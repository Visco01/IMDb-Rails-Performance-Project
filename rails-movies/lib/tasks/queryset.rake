#!/usr/bin/env ruby
namespace :queryset do
  desc "Generate querysets"
  task :generate => :environment do
    Rake::Task['title_basics:generate_queryset'].invoke
  end
end
