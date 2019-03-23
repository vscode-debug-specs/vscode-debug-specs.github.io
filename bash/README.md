---
title: How to Debug Bash with VSCode
permalink: /bash/
---
# How to Debug Bash with VSCode

## Summary

* [Basic](#basic)
* [Spec](#spec)
* [Instruction](#instruction)
* [debugging executable file](#debugging-executable-file)

## Basic

* [GNU Bash](https://www.gnu.org/software/bash/)
* Extension: [Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug)
* Debugger: [bashdb](http://bashdb.sourceforge.net/)
* module code: [bubble_sort.sh](https://github.com/74th/vscode-debug-specs/blob/master/bash/bubbleSort.sh)

## Spec

* OS
	* ✅ MacOS
	* ✅ Windows
	* ✅ Linux
* Break Point
	* ✅ break point
	* ❌ condition break point : able to set, but not working
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
	* ❌ remote debugging

## Instruction

### MacOS

```
brew install bashdb
```

### Linux(Ubuntu 18.04)

Ubuntu 18.04 don't have bashdb package. You need build from source.

see https://github.com/rogalmic/vscode-bash-debug/issues/67

### Windows

* [install wsl Ubuntu18.04](https://www.microsoft.com/store/productId/9N9TNGVNDL3Q)
* see Linux instruction

## debugging executable file

* Program: [bubble_sort.sh](https://github.com/74th/vscode-debug-specs/blob/master/bash/bubbleSort.sh)

### launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Bash-Debug (hardcoded script name)",
			"type": "bashdb",
			"request": "launch",
			"program": "${workspaceRoot}/bubbleSort.sh",
			"commandLineArguments": "4 3 2 1"
		}
	]
}
```
