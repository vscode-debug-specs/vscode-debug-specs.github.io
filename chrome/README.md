<!-- vim: ts=2 sw=2 expandtab
-->
# Javascript(NodeJS) and AltJS(typescript)

## Summary

* [Basic](#basic), [Spec](#spec)
* Unit Test: [mocha](#mocha-unit-test-framework), [jasmine](#jasmine)
* [executable file debug](#executable-file-debug)
* [use typescript](#use-typescript)

## Basic

* [nodejs](https://nodejs.org/)
* Extension: build-in
* Debugger: node
* target module code: [bubble_sort.js](bubble_sort.js)

## Spec

* OS
	* ✅ MacOS
	*  Windows
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
	* ✅ debug executable package
	* ✅ remote debugging

## Instraction

Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome).

## simple javascript debug

### launch.json

* module code: [html/js/normal_bubble_sort.js](html/js/normal_bubble_sort.js)

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

1. Start web server at http://localhost:8080 and put code.
  * you can use http-server package in npm. `npm install -g http-server` `http-server html/`
2. Launch Debug. Chrome browser will launch.

## Remote Chrome debug

### launch.json

```json
{
  "version": "0.2.0",
	"configurations": [
		{
			"type": "chrome",
			"request": "attach",
			"name": "Attach to Chrome",
			"port": 9222,
			"webRoot": "${workspaceRoot}/html"
		}
	]
}
```

### how-to

Need to add some option when you launch Chrome browser.

```
# Windows
(TODO)chrome.exe --remote-debugging-port=9222
# Mac
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
# Linux
google-chrome --remote-debugging-port=9222
```

And start debug.

## browserify and baberify code debug

If you use browserify, you can use baberify's `--sourceMapsAbsolute` for useful. But do not use at production.

```
# 1. install
npm install -g browserify babelify babel-preset-es2015

# 2. compile
browserify --debug js/browserify_main.js -o html/js/browserify_main.js -t [ babelify --presets [ es2015 ] --sourceMapsAbsolute  ]

# 3. start web server
http-server html

# 4. start debug
```

## webpack debug

HELP!

