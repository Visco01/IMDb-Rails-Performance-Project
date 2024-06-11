#!/usr/bin/env sh
jmeter -g "./results/title_basics_by_title.csv" -o "./report/title_basics_by_title"
jmeter -g "./results/title_basics_by_params.csv" -o "./report/title_basics_by_params"
