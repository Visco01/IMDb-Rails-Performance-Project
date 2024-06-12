#!/usr/bin/env sh
jmeter -n -t "./MoviesRailsMixedTests.jmx" -l "./results/movies_rails_mixed_tests.csv"
rm -rf ./report/*
jmeter -g "./results/title_basics_by_title.csv" -o "./report/title_basics_by_title"
jmeter -g "./results/title_basics_by_params.csv" -o "./report/title_basics_by_params"
jmeter -g "./results/directors_by_name.csv" -o "./report/directors_by_name"
jmeter -g "./results/actors_by_name.csv" -o "./report/actors_by_name"
jmeter -g "./results/movies_rails_mixed_tests.csv" -o "./report/mixed_tests"
