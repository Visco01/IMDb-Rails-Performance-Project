#!/usr/bin/env sh
# RUN STANDALONE TESTS
jmeter -n -t "./MoviesRailsStandaloneTests.jmx" -l "./results/movies_rails_standalone_tests.csv"
rm -rf ./report/*
jmeter -g "./results/title_basics_by_title.csv" -o "./report/title_basics_by_title"
jmeter -g "./results/title_basics_by_params.csv" -o "./report/title_basics_by_params"
jmeter -g "./results/directors_by_name.csv" -o "./report/directors_by_name"
jmeter -g "./results/actors_by_name.csv" -o "./report/actors_by_name"
