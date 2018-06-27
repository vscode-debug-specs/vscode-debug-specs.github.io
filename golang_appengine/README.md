# how to debug google add engine dev server for golang

```
* install google-app-platform sdk : https://cloud.google.com/sdk/install
* add PATH to SDK_PATH/platform/google_appengine
* execute dev server and close ctrl+C for installing golang sdk:
*

http://blog.tjun.org/entry/2018/03/13/GAE/Go%E3%82%92delve%E3%81%A7%E3%83%87%E3%83%90%E3%83%83%E3%82%B0%E3%81%99%E3%82%8B

```
go get -u github.com/derekparker/delve/cmd/dlv
goapp serve -debug app.yaml
dev_appserver.py --go_debugging app.yaml
```
