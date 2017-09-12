<!-- vim: ts=2 sw=2 expandtab
-->
# Bash

## Summary

* [Basic](#basic)
* [Spec](#spec)
* [executable file debug](#executable-file-debug)

## Basic

* [GNU Bash](https://www.gnu.org/software/bash/)
* Extension: [Bash Debug](https://marketplace.visualstudio.com/items?itemName=rogalmic.bash-debug)
* Debugger: [bashdb](http://bashdb.sourceforge.net/)
* module code: [bubble_sort.sh](https://github.com/74th/vscode-debug-specs/blob/master/bash/bubbleSort.sh)

## Spec

* OS
	* ✅ MacOS
	*  Windows
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

## Instraction

1. Install [bashdb](http://bashdb.sourceforge.net/)
	* MacOS: `brew install bashdb`
	* Ubuntu: `apt install bashdb`


## executable file debug

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
			"scriptPath": "${workspaceRoot}/bubbleSort.sh",
			"commandLineArguments": "4 3 2 1",
			"windows": {
				"bashPath": "C:\\Windows\\sysnative\\bash.exe"
			},
			"linux": {
				"bashPath": "bash"
			},
			"osx": {
				"bashPath": "bash"
			}
		}
	]
}
```
