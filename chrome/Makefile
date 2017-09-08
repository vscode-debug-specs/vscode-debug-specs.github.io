NODE_BIN=./node_modules/.bin
launch:
	$(NODE_BIN)/http-server html/
browserify:
	$(NODE_BIN)/browserify --debug js/main.js -o html/js/browserify_main.js -t [ babelify --presets [ es2015 ] --sourceMapsAbsolute  ]
