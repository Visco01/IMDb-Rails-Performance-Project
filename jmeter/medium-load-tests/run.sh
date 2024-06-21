#!/usr/bin/env sh
rm -rf ./results/*
jmeter -n -t "./MediumTest.jmx" -l "./results/medium_load_tests.csv"
rm -rf ./report/*
jmeter -g "./results/medium_load_tests.csv" -o "./report/medium_tests"
