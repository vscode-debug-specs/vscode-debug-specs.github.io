#!/bin/bash
set -eux
cd cmd/bubbleSorter/
dlv debug --headless --listen=:2345 --log -- 4 3 2 1
