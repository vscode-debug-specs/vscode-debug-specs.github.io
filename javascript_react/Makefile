NODE_BIN=./node_modules/.bin
build: js/index.js
js/index.js: src/index.jsx
	$(NODE_BIN)/babel --plugins transform-react-jsx src/index.jsx -o js/index.js
