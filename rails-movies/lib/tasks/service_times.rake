#!/usr/bin/env ruby
# lib/tasks/calculate_average_service_time.rake
namespace :service_times do
  desc "Calculate average service time for each log file"
  task avg: :environment do
    log_directory = Rails.root.join('log', 'service-times')

    Dir.glob(File.join(log_directory, '*.log')).each do |file_path|
      calculate_average_for_file(file_path)
    end
  end

  def calculate_average_for_file(file_path)
    service_times = []

    File.foreach(file_path) do |line|
      # Remove leading and trailing whitespace, then convert to float
      service_time = line.strip.to_f
      service_times << service_time
    end

    if service_times.any?
      average_service_time = service_times.sum / service_times.size
      file_name = File.basename(file_path)
      puts "Average service time for #{file_name}: #{average_service_time} seconds"
      puts '-' * 40
    else
      puts "No service times found in #{file_path}"
    end
  end
end
