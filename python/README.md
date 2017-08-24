# Python 

* [Python.org](https://www.python.org/)
* Extension: [Python](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python)
* Debugger: Python

## Spec

*  break point
*  condition break point
*  function breakpoint
*  Step Over
*  Step Into
*  Step Out
*  Continue
*  variables views
*  watch variables
*  call stack
*  eval expression to show variables
*  eval expression to change variables
*  debug unit test
*  debug executable package
*  remote debugging

## Instraction

Only installing Extension.

### additional

If you want to pyenv or other environment tools, select your environment with belong way.

* `F1`->`Python: Select Workspace Interpreter`

## unit test

### inline

* `F1`->`Python: Run Current Unit Test File`
* `Enable and configure a Test Framework.`->select your test framework.
	* sample: `unittest`->`.`->`test_*`
* Codelens on test function shows run and debug test button.

TODO: but it does not on my machine.

### launch.json

Menu: Python:Python module

```
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
	],
}
```

## executable file debug
