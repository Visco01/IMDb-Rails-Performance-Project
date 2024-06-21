#!/usr/bin/env sh
cd ./standalone-load-tests
./run.sh
sleep 30
cd ../mixed-load-tests
./run.sh
sleep 30
cd ../medium-load-tests
./run.sh