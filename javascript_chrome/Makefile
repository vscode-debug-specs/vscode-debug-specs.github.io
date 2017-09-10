NODE_BIN=./node_modules/.bin
launch:
	$(NODE_BIN)/http-server html/
launch-webpack:
	$(NODE_BIN)/webpack-dev-server -d js/webpack_main.js html/js/webpack_main.webpack.js
browserify:
	$(NODE_BIN)/browserify --debug js/browserify_main.js -o html/js/browserify_main.browserify.js -t [ babelify --presets [ es2015 ] --sourceMapsAbsolute  ]
webpack:
	$(NODE_BIN)/webpack -d js/webpack_main.js html/js/webpack_main.webpack.js
clean:
	rm -rf html/js/*.browserify.js
	rm -rf html/js/*.webpack.js
	rm -rf html/js/*.map
typescript:
	$(NODE_BIN)/webpack -d js/typescript_main.ts html/js/typescript_main.webpack.js
build: browserify webpack typescript