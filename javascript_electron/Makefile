NODE_BIN=./node_modules/.bin
launch:
	node --inspect=5858 $(NODE_BIN)/electron --remote-debugging-port=9222 .
build_typescript_main:
	$(NODE_BIN)/tsc
webpack:
	$(NODE_BIN)/webpack -d render/normal_main.js -o html/js/normal_main.webpack.js
	$(NODE_BIN)/webpack -d render/typescript_main.ts -o html/js/typescript_main.webpack.js
clean:
	rm -f \
	render/typescript_bubble_sort.js \
	render/typescript_bubble_sort.js.map \
	render/typescript_main.js \
	render/typescript_main.js.map \
	html/js/normal_main.webpack.js \
	html/js/typescript_main.webpack.js \
	app/typescript_index.js \
	app/typescript_index.js.map
