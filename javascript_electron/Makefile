NODE_BIN=./node_modules/.bin
launch:
	node --inspect=5858 $(NODE_BIN)/electron --remote-debugging-port=9222 .
webpack:
	$(NODE_BIN)/webpack -d lib/typescript_main.ts html/js/typescript_main.webpack.js