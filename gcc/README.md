# Javascript(Nodejs)

## Summary

* [Basic](#basic), [Spec](#spec)
* Unit Test: [cunit](#cunit)
* [executable file debug](executable-file-debug)

## Basic

* [GNU GCC](https://gcc.gnu.org/)
* Extension: [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
* Debugger: lldb(MacOS), pdb
* target module code: [bubble_sort.c](bubble_sort.c)

## Spec

* OS
  * ✅ MacOS
  *  Windows
  *  Linux
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
  * ❌ remote debugging

## Instraction

no instraction.

## cunit

```
brew install cunit
```

### launch.json

* test code: [mocha/bubble_sort.test.js](mocha/bubble_sort.test.js)
* menu: "Node.js: Mocha Tests"

```json
{
  "version": "0.2.0",
  "configurations": [
    {
    "name": "(lldb) Attach(for cunit)",
      "type": "cppdbg",
      "request": "attach",
      "program": "${workspaceRoot}/a.out",
      "processId": "${command:pickProcess}",
      "MIMode": "lldb"
    }
  ]
}
```

### how-to

1. build with cunit

```
gcc bubble_sort.c bubble_sort_cunit.c -g -O0 -W -Wall -L/usr/local/lib -lcunit
```

2. execute program

```
./a.out
***************** CUNIT CONSOLE - MAIN MENU ******************************
(R)un  (S)elect  (L)ist  (A)ctivate  (F)ailures  (O)ptions  (H)elp  (Q)uit
Enter command:
```

3. Start "(lldb) Attach(for cunit)" and select `a.out`
4. run test (R) at cunit console

### gcc option

* `-W` and `-Wall` : show warnings (not must)
* `-g` : debug
* `-O0` : no optimisation
* `-lcunit` : load cunit

## executable file debug

* Program: [main.c](main.c)

### launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
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
    }
  ]
}
```

### how-to

1. build with `-g -O0` and `-lcunit` option 

```
gcc bubble_sort.c main.c -g -O0 -W -Wall
```

2. Start "Launch Program(lldb)"

