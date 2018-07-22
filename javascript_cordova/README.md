#

## Instruction

* install cordova for global:`npm i -g cordova`

## Android MacOS

* you must install jdk 1.8 at July 12th 2018 http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
* set JAVA_HOME to jdk 1.8

```bash
export JAVA_HOME=`/usr/libexec/java_home -v 1.8`
```

* install gradle `brew install gradle`
* install Android Studio https://developer.android.com/studio/
* install Android SDK 8.0 (API Level 26)
	* open Android Studio
	* click Configure->Android SDK
	* check Android 8.0(Oreo)
	* click "Apply"

## iOS emulator MacOS

* check iOS emulator list: `cordova emulate ios --list`
* install some tools: `brew install ideviceinstaller ios-webkit-debug-proxy`

## iOS device MacOS

* you need to turn off SIP
* `sudo rm /System/Library/PrivateFrameworks/MobileDevice.framework/XPCServices`
* install ios-deploy `npm install -g ios-deploy`
* open in xcode :`open ./platforms/ios/JavaScriptCordova.xcworkspace/`