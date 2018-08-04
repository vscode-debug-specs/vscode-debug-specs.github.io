# Ruby on Rails

## spec

* see [ruby](../ruby)

## how to debug local rails server

### setup

* install rbenv: https://github.com/rbenv/rbenv
* install ruby: `rbenv install 2.5.1`
* set ruby version to local: `rbenv local 2.5.1`
* add some gem to Gemfile

```
group :development do
  ...
  gem 'ruby-debug-ide'
  gem 'debase'
end
```

* `bundle install`

### .vscode/launch.json

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "launch Rails server",
			"type": "Ruby",
			"request": "launch",
			"cwd": "${workspaceRoot}",
			"program": "${workspaceRoot}/bin/rails",
			"args": [
				"server"
			],
			"useBundler": true,
		}
	]
}
```

#### points

* `useBundler: true`

### execute

* start debug, rails server will start.
* access http://localhost:3000/

## how to debug remote rails server

### .vscode/launch.json

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "attach remote Rails Server",
			"type": "Ruby",
			"request": "attach",
			"remoteHost": "127.0.0.1",
			"remotePort": "1234",
			"cwd": "${workspaceRoot}",
			"remoteWorkspaceRoot": "${workspaceRoot}",
		}
	]
}
```

#### point

* `"cdw"`: local dir
* `"remoteWorkspaceRoot"`: remote server root dir

### execute

* start rdebug-ide at remote server

```
bundle exec rdebug-ide --host 0.0.0.0 --port 1234  -- ./bin/rails server
```

* start debug at vscode