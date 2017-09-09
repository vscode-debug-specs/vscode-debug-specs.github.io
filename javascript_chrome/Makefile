NODE_BIN=./node_modules/.bin
launch:
	$(NODE_BIN)/http-server html/
launch-webpack:
	$(NODE_BIN)/webpack-dev-server -d js/webpack_main.js html/js/webpack_main.js
browserify:
	$(NODE_BIN)/browserify --debug js/browserify_main.js -o html/js/browserify_main.js -t [ babelify --presets [ es2015 ] --sourceMapsAbsolute  ]
webpack:
	$(NODE_BIN)/webpack -d js/webpack_main.js html/js/webpack_main.js
clean:
	rm -rf html/js/browserify_main.js
	rm -rf html/js/webpack_main.js
	rm -rf html/js/*.map
