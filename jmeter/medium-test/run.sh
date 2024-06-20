#!/usr/bin/env sh
#rm -rf ./results/*
jmeter -n -t "./MediumTest.jmx" -l "./results/medium_test.csv"
#rm -rf ./report/*
jmeter -g "./results/medium_test.csv" -o "./report/medium_tests"
