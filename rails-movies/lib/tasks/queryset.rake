#!/usr/bin/env ruby
namespace :queryset do
  desc "Generate querysets"
  task :generate => :environment do
    Rake::Task['title_basics:generate_queryset'].invoke
    Rake::Task['name_basics:generate_directors_queryset'].invoke
    Rake::Task['name_basics:generate_actors_queryset'].invoke
  end
end
