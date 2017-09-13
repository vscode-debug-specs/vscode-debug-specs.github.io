---
title: How to Debug C# (.Net Core) with VSCode
permalink: /csharp/
---
# How to Debug C# (.Net Core) with VSCode

## Summary

* [Basic](#Basic)
* [Spec](#Spec)
* [install](#install)
* [XUnit Test](#XUnit-Test)
* [Console Program](#Console-Program)

## Basic

* [Welcome to .NET Core!](https://dotnet.github.io/)
* Extension: [C#](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
* Debugger: .NET Core function
* module code: [BubbleSort/BubbleSorter.cs](https://github.com/74th/vscode-debug-specs/blob/master/csharp/BubbleSort/BubbleSorter.cs)

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
    * TODO remote debugging
    * TODO ASP.NET Core

## install

* [install .net Core SDK](https://www.microsoft.com/net/core)
* [install Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
* When you open C# code, it'll start to install necessary tools.

## XUnit Test

* test code: [BubbleSortTest/TestSort.cs](https://github.com/74th/vscode-debug-specs/blob/master/csharp/BubbleSortTest/TestSort.cs)

### Inline

1. open xunit code.
2. click Yes to message "Required assets to build and debug are missin from ...

![startup](startup.png)

3. show Inline

![XUnit](xunit.png)

## Console Program

* Console Program code: [BubbleSorter/Program.cs](https://github.com/74th/vscode-debug-specs/blob/master/csharp/BubbleSorter/Program.cs)

### way need to open project dir

1. change VSCode dir to the project dir.
2. open C# code in the project.
3. click Yes to message "Required assets to build and debug are missin from ...

![startup](startup.png)

### way no need to open project dir

add tasks.json to build task

tasks.json
```json
{
    "version": "0.1.0",
    "command": "dotnet",
    "isShellCommand": true,
    "args": [],
    "tasks": [
        {
            // if you need multiple tasks, change taskName
            "taskName": "build",
            "args": [
                "${workspaceRoot}/BubbleSorter/BubbleSorter.csproj"
            ],
            "isBuildCommand": true,
            "problemMatcher": "$msCompile"
        }
    ]
}
```

add launch.json to debug setting

launch.json
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": ".NET Core Launch (console)",
            "type": "coreclr",
            "request": "launch",
            // set build task name
            "preLaunchTask": "build",
            // set dll path
            "program": "${workspaceRoot}/BubbleSorter/bin/Debug/netcoreapp2.0/BubbleSorter.dll",
            "args": [
                "4",
                "3",
                "2",
                "1"
            ],
            // set project dir path
            "cwd": "${workspaceRoot}/BubbleSorter",
            "console": "internalConsole",
            "stopAtEntry": false,
            "internalConsoleOptions": "openOnSessionStart"
        }
    ]
}
```

## Remote debug

TODO

## ASP.NET debug

TODO
