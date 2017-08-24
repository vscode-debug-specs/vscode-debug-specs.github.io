build:
	cd cmd/bubbleSorter; go build -gcflags '-N -l' 
debug-remote:
	cd cmd/bubbleSorter/; dlv debug --headless --listen=:2345 --log
debug-running-process: build
	./debug-runnning-process.sh
