---
title: How to Debug Java with VSCode
permalink: /java/
---
# How to Debug Java with VSCode

## Summary

* [Basic](#basic), [Spec](#spec)
* Unit Test: [junit](#unit-test-junit)
* [executable file debug](#executable-file-debug)
* [attach running and remote process](#attach-running-and-remote-process)

## Basic

* [Java](https://www.java.com/)
* Extension:[Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug)
* Debugger: jdb
* module code: [src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSort.java](src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSort.java)

## Spec

* OS
	* ✅ MacOS
	* ✅ Windows
	* ？ Linux
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
	* ✅ debug unit test
	* ✅ debug executable package
	* ✅ remote debugging

## unit test (Junit)

### launch.json

* test code: [src/test/java/com/j74th/vscodedebugbook/bubblesort/BubbleSortTest.java](src/test/java/com/j74th/vscodedebugbook/bubblesort/BubbleSortTest.java)

```json
{
	"version": "0.2.0",
	"configurations": [
		{
            "type": "java",
            "name": "Test Debug (Launch)",
            "request": "launch",
            "mainClass": "junit.textui.TestRunner",
            "args": "com.j74th.vscodedebugbook.bubblesort.BubbleSortTest"
		}
	]
}
```

## Instruction

* Install OpenJDK or OracleJDK
* set JDK path to environment value JAVA_HOME
* set JDK/bin path to PATH

## executable file debug

* Program: [src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSorter.java](src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSorter.java)

### launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
            "type": "java",
            "name": "Debug (Launch)",
            "request": "launch",
            "mainClass": "com.j74th.vscodedebugbook.bubblesort.BubbleSorter",
            "args": "4 3 2 1"
		}
	]
}
```

## attach running and remote process

### launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
            "type": "java",
            "name": "Debug (Attach)",
            "request": "attach",
            "hostName": "192.168.1.24",
            "port": 5005
		}
	]
}
```

### how-to

1. run program with debug option
	* set `suspend=y` when you like to stop before attach, otherwise `suspend=n` when you like to start right away.

```sh
java -cp target/classes -Xdebug -Xrunjdwp:transport=dt_socket,server=y,address=5005,suspend=y com.j74th.vscodedebugbook.bubblesort.BubbleSorter 4 3 2 1
```

2. start debug
