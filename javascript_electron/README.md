---
title: How to Debug Electron JavaScript and TypeScript with VSCode
permalink: /javascript_electron/
---
# How to Debug Electron JavaScript and TypeScript with VSCode

## Summary

* [Basic](#basic)
* [launch Chrome browser](#launch-Chrome-browser)
* [attach Chrome browser](#attach-Chrome-browser)
* [using browserify](#using-browserify)
* [using webpack](#using-webpack)
* [using typescript and webpack](#using-typescript-and-webpack)

## Basic

* [electron](https://electron.atom.io/)
* Extension for Main Process : builtin
* Extension for Render Process : [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* Debugger: nodejs, Chrome

## Spec

see [nodejs](../javascript) and [chrome](../javascript_chrome)

## Instraction

* install Chrome browser
* install nodejs
* install Debugger for Chrome extension
* init npm project: `npm init`
* install electron: `npm i --save electron`

## launch Electron and attach main process

* module code: [index.js](https://github.com/74th/vscode-debug-specs/blob/master/javascript_electron/index.js)
* menu: "Node.JS: Electron Main"

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Debug Main Process",
			"runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
			"program": "${workspaceRoot}/index.js",
			"runtimeArgs": [
				".",
				// this args for attaching render process
				"--remote-debugging-port=9222"
			],
			"windows": {
				"runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
			},
			"protocol": "legacy"
		}
	]
}
```

## attach render process

point: when launching Electron, add `--remote-debugging-port=9222` option.

### launch.json

* menu: "Chrome attach"

```json
{
	"version": "0.2.0",
	"configurations": [
			{
			"type": "node",
			"request": "launch",
			"name": "Debug Main Process",
			"runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
			"program": "${workspaceRoot}/index.js",
			"runtimeArgs": [
				".",
				// this args for attaching render process
				"--remote-debugging-port=9222"
			],
			"windows": {
				"runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
			},
			"protocol": "legacy"
		},
		{
			"type": "chrome",
			"request": "attach",
			"name": "Attach to Render Process",
			"port": 9222,
			"webRoot": "${workspaceRoot}/html"
		}
	]
}
```

### how-to

1. launch electron with `Debug Main Process`
2. start `Attach to Render Process`

## attach to electron process

### launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "attach",
			"name": "Attach to Main Process",
			"address": "localhost",
			"port": 5858,
			"localRoot": "${workspaceRoot}",
			"remoteRoot": "${workspaceRoot}"
		},
		{
			"type": "chrome",
			"request": "attach",
			"name": "Attach to Render process",
			"port": 9222,
			"webRoot": "${workspaceRoot}/html"
		}
	]
}
```

### how-to

 1. launch electron

```
node --inspect=5858 ./node_modules/.bin/electron --remote-debugging-port=9222 .
```

 2. start `Attach to Main Process`

 3. start `Attach to Render process`

