---
layout: default
title: How to Debug Google Appengine for Golang with VSCode
permalink : /golang_appengine/
---
# How to Debug Google Appengine for Golang with VSCode

## Summary

* [Basic](#basic)
* [Spec](#spec)
* [Instraction](#instraction)
* [debugging devserver](#debugging-devserver)

## Basic

see [Golang](../golang/)

## Spec

see [Golang](../golang/)

## Instraction

* install google-app-platform sdk : https://cloud.google.com/sdk/install
	* we installed to `~/google-cloud-sdk`
* set PATH to `google-cloud-sdk/bin`
* create go symbolic link in sdk (`goapp` command in goroot can be used as `go` command)

```
#ln -s go ~google-cloud-sdk/platform/google_appengine/goroot-1.9/goapp
```

* install vscode-go extension
* configure workspace settings

```json
{
	"go.goroot": "~/google-cloud-sdk/platform/google_appengine/goroot-1.9",
	"go.gopath": "~/google-cloud-sdk/platform/google_appengine/gopath",
	"go.toolsGopath": "~/google-cloud-sdk/platform/google_appengine/gopath",
}
```

* execute F1->`Go: Install/Update Tools`

```

### when you fail install some package (ex: delve)

* check goapp version

```
$~/google-cloud-sdk/platform/google_appengine/goroot-1.9/bin/goapp version
go version 1.9.4 (appengine-1.9.71) darwin/amd64
```

* download same version runtime from https://golang.org/dl/
* set GOROOT and GOPATH, and install extensions

```
$export GOPATH=~/google-cloud-sdk/platform/google_appengine/gopath
$export GOROOT=go1.9.4
$go1.9.4/bin/go get github.com/derekparker/delve/cmd/dlv
$go1.9.4/bin/go get golang.org/x/tools/cmd/godoc
```

### prefer setting

set direnv settings(`.envrc`) in the workspace

```
export GOROOT=~/google-cloud-sdk/platform/google_appengine/goroot-1.9/
export GOPATH=~/google-cloud-sdk/platform/google_appengine/gopath/
export PATH=~/google-cloud-sdk/platform/google_appengine/gopath/bin:$PATH
export PATH=~/google-cloud-sdk/platform/google_appengine/goroot-1.9/bin:$PATH
```

## debugging devserver

### settings.json

same for remote debugging

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Connect to server",
			"type": "go",
			"request": "launch",
			"mode": "remote",
			"remotePath": "${workspaceRoot}",
			"port": 2345,
			"host": "127.0.0.1",
			"program": "${workspaceRoot}",
			"env": {},
			"args": []
		},
	]
}
```

### how to

* run `dev_appserver.py` with `--go_debugging`

```
$dev_appserver.py app.yaml --go_debugging
```

* check pid and dlv attaches it with headless and listen settings

```
$ps au | grep _go_ap[p]
nnyn 16353   0.0  0.0 558439268   4384 s002  S+    5:54PM   0:00.01 /var/folders/tb/nzm_jqzn1f5d1r2jlj8jp3nw0000gn/T/tmputIGVHappengine-go-bin/_go_app
$dlv attach 16353 --headless --listen=:2345 --log
API server listening at: [::]:2345
```

* start debug at VSCode
