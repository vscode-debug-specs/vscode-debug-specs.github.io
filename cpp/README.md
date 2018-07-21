---
title: How to Debug C/C++ with VSCode
permalink: /cpp/
---
# How to Debug C/C++ with VSCode

## Summary

* [Basic](#basic)
* [Spec](#spec)
* [debugging Unit Test (cunit)](#debugging-unit-test-cunit)
* [debugging executable file](#debugging-executable-file)
* [debugging on Windows](#debugging-on-windows)

## Basic

* [GNU GCC](https://gcc.gnu.org/)
* Extension: [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
* Debugger: lldb(MacOS), gdb(Linux)
* module code: [bubble_sort.c](https://github.com/74th/vscode-debug-specs/blob/master/cpp/bubble_sort.c)

## Spec

* OS
  * ✅ MacOS
  * ✅ Windows
  * ✅ Linux
* Break Point
  * ✅ break point
  * ✅ condition break point
  * ✅ function breakpoint
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
  * ✅ debug unit test
  * ✅ debug executable package
  * ✅ attach debug process (but cannot work on MacOS)
  * ✅ remote debugging (but cannot start server on MacOS)

## Instruction

### MacOS

* install XCode
* install Extension [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

### Windows

* install Visual Studio 2017
* install Extension [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

### Linux

* install gcc: `sudo apt get -y gcc`
* install Extension [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)

## debugging unit test (cunit)

* test code: [bubble_sort_cunit.c](https://github.com/74th/vscode-debug-specs/blob/master/cpp/bubble_sort_cunit.c)

### MacOS instruction

```
brew install cunit
```

### Ubuntu instruction

```
sudo apt install libcunit1 libcunit1-dev
```

### Windows instruction

HELP Wanted

### launch.json

menu: C/C++: Launch

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      // for MacOS
			"name": "(lldb) Launch cunit",
			"type": "cppdbg",
			"request": "launch",
			"program": "${workspaceRoot}/bubble_sort_cunit",
			"args": [],
			"stopAtEntry": false,
			"cwd": "${workspaceRoot}",
			"environment": [],
			"externalConsole": true,
			"preLaunchTask": "build cunit",
			"MIMode": "lldb"
    },
    {
      // for Linux
      "name": "(gdb) Launch cunit",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceRoot}/a.out",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceRoot}",
      "environment": [],
      "externalConsole": true,
      "MIMode": "gdb",
      "preLaunchTask": "build cunit",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ]
    }
  ]
}
```

### how-to

 1. build cunit

```
gcc bubble_sort.c bubble_sort_cunit.c -g -O0 -W -Wall -lcunit
```

 2. Start "launch cunit"

 3. new window is opened, and Run cunit

```
./a.out
***************** CUNIT CONSOLE - MAIN MENU ******************************
(R)un  (S)elect  (L)ist  (A)ctivate  (F)ailures  (O)ptions  (H)elp  (Q)uit
Enter command: R
```

### gcc option for debugging

* `-W` and `-Wall` : show warnings (not must)
* `-g` : debug
* `-O0` : no optimisation
* `-lcunit` : load cunit

## debugging executable file (MacOS, Linux)

* Program: [main.c](https://github.com/74th/vscode-debug-specs/blob/master/cpp/main.c)

### launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      // MacOS
      "name": "Launch Program(lldb)",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceRoot}/a.out",
      "args": [
        "4",
        "3",
        "2",
        "1"
      ],
      "stopAtEntry": false,
      "cwd": "${workspaceRoot}",
      "environment": [],
      "externalConsole": true,
      "MIMode": "lldb"
    },
    {
      // Linux
      "name": "(gdb) Launch",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceRoot}/a.out",
      "args": [
        "4",
        "3",
        "2",
        "1"
      ],
      "stopAtEntry": false,
      "cwd": "${workspaceRoot}",
      "environment": [],
      "externalConsole": true,
      "MIMode": "gdb",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ]
    },
  ]
}
```

### how-to

 1. build with `-g -O0` option

```
gcc bubble_sort.c main.c -g -O0 -W -Wall
```

 2. Start "Launch Program"

## debugging execute file (Windows)

### launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "(Windows) Launch",
			"type": "cppvsdbg",
			"request": "launch",
			"program": "${workspaceRoot}/main.exe",
			"args": ["4","3","2","1" ],
			"stopAtEntry": false,
			"cwd": "${workspaceRoot}",
			"environment": [],
			"externalConsole": true
		}
  ]
}
```

### how-to

 1. Start Developer Command Prompt and build with /ZI option

```cmd
cl main.c bubble_sort.c /ZI
```

 2. Start debug.

## attach to process

### launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
		{
			"name": "(Linux gdb) Attach",
			"type": "cppdbg",
			"request": "attach",
			"program": "${workspaceFolder}/bubble_sort_cunit",
			"processId": "${command:pickProcess}",
			"MIMode": "gdb",
			"setupCommands": [
				{
					"description": "Enable pretty-printing for gdb",
					"text": "-enable-pretty-printing",
					"ignoreFailures": true
				}
			]
		}
  ]
}
```

## debug to remote machine (Mac/Linux to Linux)

With pipe transport, you'll debug remote linux from macos.

### launch.json

* set gdb path with sudo

```json
{
  "version": "0.2.0",
  "configurations": [
		{
			"name": "(Mac to Linux)pipe transport",
			"type": "cppdbg",
			"request": "launch",
			"program": "/home/nnyn/Documents/vscode-debug-specs/cpp/main",
			"args": [
				"4",
				"3",
				"2",
				"1"
			],
			"stopAtEntry": false,
			"cwd": "/home/nnyn/Documents/vscode-debug-specs/cpp",
			"environment": [],
			"externalConsole": true,
			"pipeTransport": {
				"pipeCwd": "/usr/bin",
				"pipeProgram": "/usr/bin/ssh",
				"pipeArgs": [
					"nnyn@192.168.56.101"
				],
				"debuggerPath": "sudo /usr/bin/gdb"
			},
			"sourceFileMap": {
				// "remote": "local"
				"/home/nnyn/Documents/vscode-debug-specs/cpp": "${workspaceFolder}"
			},
			"MIMode": "gdb"
		},
	}
 ]
```

### how to

 1. build at remote machine

```
cd /home/nnyn/Documents/vscode-debug-specs/cpp
gcc -O0 -g -W -Wall -o main bubble_sort.c main.c
```

 2. launch debug.

## attach to remote process (Mac/Linux to Linux)

With pipe transport, you'll attach remote linux process from macos.

### launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
		{
			"name": "(Mac to Linux)pipe transport attach",
			"type": "cppdbg",
			"request": "attach",
			"program": "/home/nnyn/Documents/vscode-debug-specs/cpp/bubble_sort_cunit",
			"processId": "21073",
			"pipeTransport": {
				"pipeCwd": "",
				"pipeProgram": "/usr/bin/ssh",
				"pipeArgs": [
					"nnyn@192.168.56.101"
				],
				"debuggerPath": "sudo /usr/bin/gdb"
			},
			"sourceFileMap": {
				// "remote": "local"
				"/home/nnyn/Documents/vscode-debug-specs/cpp": "${workspaceFolder}"
			},
			"MIMode": "gdb"
    }
	}
 ]
```

### how to

1. build at remote machine
2. launch program at remote machine
3. check the process id of remote process
4. set the process id to launch.json
5. launch debug