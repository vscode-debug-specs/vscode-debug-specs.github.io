---
layout: default
title: How to Debug Ruby with VSCode
permalink: /ruby/
---
# Ruby

## Summary

* [Basic](#basic)
* [Spec](#spec)
* [Instraction](#instraction)
* [unit test](#unit-test)
* [executable file debug](#executable-file-debug)

## Basic

* [ruby](https://www.ruby-lang.org/)
* Extension: [Ruby](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby)
* Debugger: ruby-debug-ide, debase
* module code: [bubble_sort.rb](https://github.com/74th/vscode-debug-specs/blob/master/ruby/bubble_sort.rb)

## Spec

* OS
	* ✅ MacOS
	* ❓ Windows
	* ❓ Linux
* Break Point
	* ✅ break point
	* ❓ condition break point : it does not work on my machine, always breaks
	* ❓ function breakpoint
	* ❓ uncaught exception breakpoint
	* ❓ all exception breakpoint
* Step Execution
	* ✅ Step Over
	* ✅ Step Into
	* ✅ Step Out
	* ✅ Continue
* Variables
	* ❓ variables views
	* ❓ watch variables
* Call Stack
	* ❓ call stack
* Evaluation
	* ❓ eval expression to show variables
	* ❓ eval expression to change variables
* Type of Execution
	* ❓ debug unit test
	* ❓ debug executable package
	* ❓ remote debugging

## Instraction

```
# JRuby or r Ruby v1.8.x
gem install ruby-debug-ide
# Ruby v1.9
gem install ruby-debug-ide 
gem install ruby-debug-base19x
# Ruby v2.x
gem install ruby-debug-ide -v 0.6.0
gem install debase -v 0.2.2
```

install [extension](https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby).

## module code

* module code: [bubble_sort.rb](https://github.com/74th/vscode-debug-specs/blob/master/ruby/bubble_sort.rb)

## Unix Test

### test/unit

#### test code

* [test_unit/test_bubble_sort.rb](https://github.com/74th/vscode-debug-specs/blob/master/ruby/test_unit/test_bubble_sort.rb)

#### .vscode/launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Debug test/unit",
			"type": "Ruby",
			"request": "launch",
			"cwd": "${workspaceRoot}",
			"program": "${workspaceRoot}/test_bubble_sort.rb",
			"args":[
				"--name=test_bubble_sort"
			]
		}
	]
}
```

### test/unit

#### code

* [bin/bin.rb](https://github.com/74th/vscode-debug-specs/blob/master/ruby/bin/bin.rb)

#### vscode.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Debug execute File",
			"type": "Ruby",
			"request": "launch",
			"cwd": "${workspaceRoot}",
			"program": "${workspaceRoot}/bin.rb"
		}
	]
}
```

### Ruby on Rails

TODO
