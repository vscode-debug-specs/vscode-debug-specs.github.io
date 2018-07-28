NODE_BIN=./node_modules/.bin
launch:
	$(NODE_BIN)/http-server html/
browserify:
	$(NODE_BIN)/browserify --debug js/browserify_main.js -o html/js/browserify_main.browserify.js -t [ babelify --presets [ env ] --sourceMapsAbsolute  ]
webpack:
	$(NODE_BIN)/webpack js/webpack_main.js --output html/js/webpack_main.webpack.js
clean:
	rm -rf html/js/*.browserify.js
	rm -rf html/js/*.webpack.js
	rm -rf html/js/*.map
typescript:
	$(NODE_BIN)/webpack js/typescript_main.ts --output html/js/typescript_main.webpack.js
build: browserify webpack typescript
