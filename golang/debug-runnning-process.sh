#!/bin/bash
set -eux
cd cmd/bubbleSorter/
./bubbleSorter -sleep 30 &
PID=$!
dlv attach $PID ./bubbleSorter --headless --listen=:2345 --log
