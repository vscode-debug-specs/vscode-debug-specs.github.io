NODE_BIN=./node_modules/.bin
build: build_js build_ts
build_js:
	$(NODE_BIN)/babel -D src/js -d html/js --source-maps
build_ts:
	$(NODE_BIN)/webpack-cli
clean:
	rm html/js/*.{js,map}
server:
	$(NODE_BIN)/http-server html -c-1
