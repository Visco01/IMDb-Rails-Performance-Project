#!/usr/bin/env sh
rm -rf ./results/*
jmeter -n -t "./MoviesRailsMixedTests.jmx" -l "./results/movies_rails_mixed_tests.csv"
rm -rf ./report/*
jmeter -g "./results/movies_rails_mixed_tests.csv" -o "./report/mixed_tests"
