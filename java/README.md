<!-- vim: ts=2 sw=2 expandtab
-->
# Java

## Summary

* [Basic](#basic), [Spec](#spec)
* Unit Test: [junit](#unit-test-junit)
* [executable file debug](#executable-file-debug)
* [attach running and remote process](#attach-running-and-remote-process)

## Basic

* [Java](https://www.java.com/)
* Extension:[Java Debugger](https://marketplace.visualstudio.com/items?itemName=donjayamanne.javadebugger)
* Debugger: jdb
* target module code: [src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSort.java](src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSort.java)

## Spec

* OS
	* ✅ MacOS
	*  Windows
	*  Linux
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
			"name": "junit test",
			"type": "java",
			"request": "launch",
			"jdkPath": "${env:JAVA_HOME}/bin",
			"sourcePath": [
				"${workspaceRoot}/src/main/java",
				"${workspaceRoot}/src/test/java"
			],
			"cwd": "${workspaceRoot}/src/test/java/com/j74th/vscodedebugbook/bubblesort",
			"startupClass": "junit.textui.TestRunner",
			"args": [
				"com.j74th.vscodedebugbook.bubblesort.BubbleSortTest"
			],
			"classpath": [
				"${workspaceRoot}/target/classes",
				"${workspaceRoot}/target/test-classes",
				"${workspaceRoot}/junit-3.8.2.jar"
			]
		},
	]
}
```

* must set "jdkPath", "sourcePath" and "classpath" accurately

## executable file debug

* Program: [src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSorter.java](src/main/java/com/j74th/vscodedebugbook/bubblesort/BubbleSorter.java)

### launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Java",
			"type": "java",
			"request": "launch",
			"stopOnEntry": true,
			"jdkPath": "${env:JAVA_HOME}/bin",
			"cwd": "${workspaceRoot}/src/main/java",
			"sourcePath": [
				"${workspaceRoot}/src/main/java"
			],
			"startupClass": "com.j74th.vscodedebugbook.bubblesort.BubbleSorter",
			"classpath": [
				"${workspaceRoot}/target/classes"
			],
			"args": [
				"4",
				"3",
				"2",
				"1"
			]
		}
	]
}
```

* must set "jdkPath", "sourcePath" and "classpath" accurately

## attach running and remote process

### launch.json

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Java attach",
			"type": "java",
			"request": "attach",
			"jdkPath": "${env:JAVA_HOME}/bin",
			"cwd": "${workspaceRoot}/src/test/java/com/j74th/vscodedebugbook/bubblesort",
			"startupClass": "${fileBasenameNoExtension}",
			"remoteHost": "localhost",
			"remotePort": 5005,
			"sourcePath": [
				"${workspaceRoot}/src/main/java"
			],
			"classpath": [
				"${workspaceRoot}/target/classes"
			],
			"externalConsole": true
		}
	]
}
```

### how-to

1. run program with debug option
	* set `suspend=y` when you like to stop before attach, othrewise `suspend=n` when you like to start right away.

```sh
java -cp target/classes -Xdebug -Xrunjdwp:transport=dt_socket,server=y,address=5005,suspend=y com.j74th.vscodedebugbook.bubblesort.BubbleSorter 4 3 2 1
```

2. start debug
