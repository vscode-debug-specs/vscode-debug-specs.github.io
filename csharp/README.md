# C# (.Net Core)

* [Welcome to .NET Core!](https://dotnet.github.io/)
* Extension: [Go](https://marketplace.visualstudio.com/items?itemName=lukehoban.Go)
* Debugger: Include with runtime

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
    *  remote debugging
    * TODO ASP.NET Core

## install

* [install .net Core SDK](https://www.microsoft.com/net/core)
* [install Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.csharp)
* When you open C# code, it'll start to install necessary tools.

## XUnit Test

### Inline

1. open xunit code.
2. click Yes to message "Required assets to build and debug are missin from ...

![startup](startup.png)

3. show Inline

![XUnit](xunit.png)

## Console Program

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
