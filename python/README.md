# Python

* [Python.org](https://www.python.org/)
* Extension: [Python](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python)
* Debugger: Python

## Spec

* ✅ break point
* ❓ condition break point : it does not work on my machine, always breaks
* ❌ function breakpoint
* ✅ uncaught exception breakpoint
* ✅ all exception breakpoint
* ✅ Step Over
* ✅ Step Into
* ✅ Step Out
* ✅ Continue
* ✅ variables views
* ✅ watch variables
* ✅ call stack
* ✅ eval expression to show variables
* ✅ eval expression to change variables
* ✅ debug unit test
* ✅ debug executable package
* ❓ remote debugging

## Instraction

Only installing Extension.

### additional

If you want to pyenv or other environment tools, select your environment with belong way.

`F1`->`Python: Select Workspace Interpreter`

![SelectWorkspaceInterpreter1.png](SelectWorkspaceInterpreter1.png)

![SelectWorkspaceInterpreter2.png](SelectWorkspaceInterpreter2.png)

## unit test

### inline

`F1`->`Python: Run Current Unit Test File`

![CodelensUnitTest1.png](CodelensUnitTest1.png)

`Enable and configure a Test Framework.`->select your test framework.

![CodelensUnitTest2.png](CodelensUnitTest2.png)
![CodelensUnitTest3.png](CodelensUnitTest3.png)

sample: `unittest`->`.`->`test_*`

![CodelensUnitTest4.png](CodelensUnitTest4.png)
![CodelensUnitTest5.png](CodelensUnitTest5.png)

Codelens on test function shows run and debug test button.

![CodelensUnitTest6.png](CodelensUnitTest6.png)

TODO: but it does not on my machine.

### use launch.json

Menu: Python:Python module

![DebugPythonModule](DebugPythonModule.png)

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python Module",
            "type": "python",
            "request": "launch",
            "stopOnEntry": true,
            "pythonPath": "${config:python.pythonPath}",
            "module": "unittest",
            "args": [
                // test package
                // <test_file>
                // <test_file>.<test_class>
                // <test_file>.<test_class>.<test_method>
                "test_bubble_sort.TestBubbleSort.test_bubble_sort"
            ],
            "cwd": "${workspaceRoot}",
            "env": {},
            "envFile": "${workspaceRoot}/.env",
            "debugOptions": [
                "WaitOnAbnormalExit",
                "WaitOnNormalExit",
                "RedirectOutput"
            ]
        }
    ]
}
```

### debug with integrated terminal

Menu: Python: Python program with Integrated Terminal/Console

```
{
    "version": "0.2.0",
    "configurations": [
        {
			"name": "Integrated Terminal/Console",
			"type": "python",
			"request": "launch",
			"stopOnEntry": true,
			"pythonPath": "${config:python.pythonPath}",
			"program": "bubble_sorter.py",
			"cwd": "",
			"console": "integratedTerminal",
			"env": {},
			"envFile": "${workspaceRoot}/.env",
			"debugOptions": [
				"WaitOnAbnormalExit",
				"WaitOnNormalExit"
			]
        }
    ]
}
```

## executable file debug

![DebugPython](DebugPython.png)

### launch.json

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python",
            "type": "python",
            "request": "launch",
            "stopOnEntry": true,
            "pythonPath": "${config:python.pythonPath}",
            //"program": "${file}",
            "program": "bubble_sorter.py",
            "args": [
                "4",
                "3",
                "2",
                "1"
            ],
            "cwd": "${workspaceRoot}",
            "env": {},
            "envFile": "${workspaceRoot}/.env",
            "debugOptions": [
                "WaitOnAbnormalExit",
                "WaitOnNormalExit",
                "RedirectOutput"
            ]
        }
    ]
}
```

## remote debug

detail: https://donjayamanne.github.io/pythonVSCodeDocs/docs/debugging_remote-debugging/

```python
import ptvsd

ptvsd.enable_attach("nnyn", address=('0.0.0.0', 2345))

time.sleep(10)
```

## Dojango

TODO: Django Application

## Google App Engine

TODO: Google App Engine Application

