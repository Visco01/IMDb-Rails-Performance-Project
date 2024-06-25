module Middleware
  class ServiceTimeLogger
    def initialize(app)
      @app = app
    end

    def call(env)
      request = Rack::Request.new(env)
      start_time = Time.now
      status, headers, response = @app.call(env)
      end_time = Time.now

      service_time = end_time - start_time
      log_request_info(request, service_time)

      [status, headers, response]
    end

    private

    def log_request_info(request, service_time)
      path = request.path
      parameters = request.params

      # Clean up the path to use as a directory name
      cleaned_path = path.gsub(/[^0-9A-Za-z.\-]/, '_')

      # Extract parameter names and generate a unique filename based on them
      parameter_names = parameters.keys.sort.join('_')
      file_name = "#{cleaned_path}_#{parameter_names}.log"
      file_path = Rails.root.join('log', 'service-times', file_name)

      # Log both parameters and service time to the appropriate file
      File.open(file_path, 'a') do |file|
        file.puts service_time
      end
    end
  end
end
