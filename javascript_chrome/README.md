---
title: How to Debug FrontEnd JavaScript(Chrome) and TypeScript with VSCode
permalink: /javascript_chrome/
---
# How to Debug FrontEnd JavaScript(Chrome) and TypeScript with VSCode

## Summary

* [Basic](#basic)
* [Spec](#spec)
* [launch Chrome browser](#launch-Chrome-browser)
* [attach Chrome browser](#attach-Chrome-browser)
* [using browserify](#using-browserify)
* [using webpack](#using-webpack)
* [using typescript and webpack](#using-typescript-and-webpack)

## Basic

* [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
* Extension: [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* Debugger: Chrome

## Spec

* OS
	* ✅ MacOS
	* ✅ Windows
	* ✅ Linux
* Break Point
	* ✅ break point
	* ✅ condition break point
	* ❌ function breakpoint
* Step Execution
	* ✅ Step Over
	* ✅ Step Into
	* ✅ Step Out
	* ✅ Continue
	* ❌ Step Back
	* ❌ Move To
	* ❌ Pause
* Variables
	* ✅ variables views
	* ✅ watch variables
* Call Stack
	* ✅ call stack
* Evaluation
	* ✅ eval expression to show variables
	* ✅ eval expression to change variables
* Type of Execution
	* ✅ launch debugging
	* ✅ remote debugging

## Instruction

* install Chrome browser
* install nodejs
* install some npm package: `npm i`
* install Debugger for Chrome extension
* put html/ to your web server. you can use http-server `./node_modules/.bin/http-server html`
  * Or task `launch web server`

## launch Chrome browser

* module code: [html/js/normal_main.js](https://github.com/74th/vscode-debug-specs/blob/master/javascript_chrome/html/js/normal_main.js)
* menu: "Chrome launch"

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "chrome",
			"request": "launch",
			"sourceMaps": true,
			"name": "Launch Chrome against localhost",
			// your web server url
			"url": "http://localhost:8080",
			// set your webroot directory
			"webRoot": "${workspaceRoot}/html"
		}
	]
}
```

### how-to

* start web server (task `launch web server`)
* set breakpoint to html/js/normal_main.js
* start debugger, Chrome browser will open

## attach Chrome browser

### launch.json

* menu: "Chrome attach"

```json
{
	"version": "0.2.0",
	"configurations": [
		{
    	"type": "chrome",
			"request": "launch",
			"sourceMaps": true,
			"name": "Launch Chrome against localhost",
      		// your web server url
			"url": "http://localhost:8080",
      		// set your webroot directory
			"webRoot": "${workspaceRoot}/html"
		}
	]
}
```

### how-to

Need to add some option when you launch Chrome browser.

```
# Windows
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
%USERPROFILE%AppData\Local\Google\Chrome\Application\chrome.exe --remote-debugging-port=9222
# Mac
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
# Linux
google-chrome --remote-debugging-port=9222
```

And start debug.

## using browserify

* module code: [js/browserify_bubble_sort.js](https://github.com/74th/vscode-debug-specs/blob/master/javascript_chrome/js/browserify_bubble_sort.js), [js/browserify_main.js](https://github.com/74th/vscode-debug-specs/blob/master/javascript_chrome/js/browserify_main.js)


If you use browserify, you can use baberify's --sourceMapsAbsolute for useful. But do not use at production.

### 1. install

```
npm install -g browserify babelify babel-preset-es2015
```

### 2. compile

```
browserify --debug js/browserify_main.js -o html/js/browserify_main.js -t [ babelify --presets [ es2015 ] --sourceMapsAbsolute  ]
```

### 3. start web server

```
http-server html
```

### 4. start debug

start debug

## using webpack

* module code: [js/webpack_bubble_sort.js](https://github.com/74th/vscode-debug-specs/blob/master/javascript_chrome/js/webpack_bubble_sort.js), [js/webpack_main.js](https://github.com/74th/vscode-debug-specs/blob/master/javascript_chrome/js/webpack_main.js)

### 1. install

```
npm install -g webpack
```

### 2. create webpack.config.js

```js
const path = require('path');

let exclude = [path.resolve(__dirname, "html")];
console.log(exclude);

module.exports = {
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "html", "js"),
		filename: "webpack.js",
	},
	resolve: {
		extensions: [".js"]
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: "source-map-loader", exclude }
		]
	},
	devServer: {
		contentBase: "html/"
	},
};
```

### 3. execute webpack with `-d` option

```
webpack -d js/webpack_main.js -o html/js/webpack_main.webpack.js
```

### 4. add sourceMapPathOverrides launch.json

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "chrome",
			"request": "launch",
			"sourceMapPathOverrides": {
        		// add this map
				"webpack:///./js/*": "${workspaceRoot}/js/*",
				"webpack:///js/*": "${workspaceRoot}/js/*"
			},
			"sourceMaps": true,
			"name": "Launch Chrome against localhost",
			"url": "http://localhost:8080",
			"webRoot": "${workspaceRoot}/html"
		}
	]
}
```

### 4. start debug

launch debugger

## using typescript and webpack

target code: [js/typescript_bubble_sort.ts](https://github.com/74th/vscode-debug-specs/blob/master/javascript_chrome/js/typescript_bubble_sort.ts), [js/typescript_main.ts](https://github.com/74th/vscode-debug-specs/blob/master/javascript_chrome/js/typescript_main.ts)

use `awesome-typescript-loader` and `source-map-loader` module.

### 1. install

```
npm install -g webpack awesome-typescript-loader source-map-loader
```

### 2. make webpack.config.json

ts file to compile.

```javascript
const path = require('path');

let exclude = [path.resolve(__dirname, "html")];
console.log(exclude);

module.exports = {
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "html", "js"),
		filename: "webpack.js",
	},
	resolve: {
		extensions: [".ts", ".js"]
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: "awesome-typescript-loader", exclude },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude }
		]
	},
	devServer: {
		contentBase: "html/"
	},
};
```

### 3. make ts.config

```json
{
    "compilerOptions": {
        // must set output dir
        "outDir": "./html/js/",
        // for node_modules dir
        "baseUrl": "./",
        "module": "commonjs",
        "target": "es2017",
        // must set for debug
        "sourceMap": true,
        "noImplicitAny": false,
        "strict": true,
        "esModuleInterop": true
    },
    // set if you'll like to divide .ts and others
    "include": [
        "./js/**/*"
    ]
}
```

### 4. compile and webpack

```sh
webpack -d js/typescript_main.ts -o html/js/typescript_main.js
```

### 5. start debug

add breakpoint to typescript code, and launch debug.
