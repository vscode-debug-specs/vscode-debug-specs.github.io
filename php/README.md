---
title: How to Debugging PHP with VSCode
permalink: /php/
---
# How to Debugging PHP with VSCode

## Summary

* [Basic](#basic), [Spec](#spec)
* [instraction](#instraction)
* [attach running and remote process](#attach-running-and-remote-process)

## basic

* [PHP](https://www.php.net/)
* Extension:
* Debugger: php-xdebug
* module code: [bubble_sort.php](bubble_sort.php)

## spec

* OS
	* ✅ MacOS
	* ✅ Windows
	* ✅ Linux
* Break Point
	* ✅ break point
	* ✅ condition break point
	* ✅ function breakpoint
	* ✅ Notice, Warning, Error
	* ✅ Exception
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
	* ❌ remote debugging: will support soon

## instraction

### MacOS

PHP(PHP-fpm)+nginx

#### 1. install

```
brew tap homebrew/homebrew-php
brew install php56 --with-fpm
brew install php56-xdebug
brew install nginx
```

#### 2. setup nginx

set your root directory to server settings.

change `fastcgi_param`.

```
vi /usr/local/etc/nginx/nginx.conf
http {

	~

	server {
		listen       8080;
		server_name  localhost;

		root /Users/nnyn/Documents/vscode-debug-specs/php;
		index  index.html index.php;

		~

		location ~ \.php$ {
			fastcgi_pass   127.0.0.1:9000;
			fastcgi_index  index.php;
			#fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
			fastcgi_param  SCRIPT_FILENAME  $document_root/$fastcgi_script_name;
			include        fastcgi_params;
		}
	}
}
```

#### 3. enable php-xdbug



change `xdebug.remote_enable` to 1 and add `xdebug.remote_autostart=1`.

```
vi /usr/local/etc/php/5.6/conf.d/ext-xdebug.ini
[xdebug]
zend_extension="/usr/local/opt/php56-xdebug/xdebug.so"

xdebug.remote_enable=1
xdebug.remote_autostart=1
xdebug.remote_port="9000"
xdebug.profiler_enable=0
xdebug.profiler_output_dir="/tmp"
xdebug.max_nesting_level=1000
xdebug.idekey = "PHPSTORM"
```

#### 4. start php-fpm and nginx

```
nginx
launchctl load -w /usr/local/opt/php56/homebrew.mxcl.php56.plist
```

#### 5. test

add phpinfo.php to your root directory.

```
vi /Users/nnyn/Documents/vscode-debug-specs/php/phpinfo.php
```

```php
<?php
phpinfo();
?>
```

access http://localhost:8080/phpinfo.php

#### 6. stop

```
nginx -s stop
launchctl unload -w /usr/local/opt/php56/homebrew.mxcl.php56.plist
```

### Windows


 1. download xampp [https://www.apachefriends.org/](https://www.apachefriends.org/)
    * default install path `C:\xampp`
 2. start apache
 3. open phpinfo.php page on web server. And copy HTML source.
 4. open https://xdebug.org/wizard.php and paste its phpinfo source.
 5. see your instruction and do it.
 6. restart apache


### Linux Ubuntu 17.04

#### 1. install packages

```
sudo apt install php php-fpm php-xdebug nginx
```

#### 2. set up nginx

* commentout php-fpm settings
* update `root` directory

```
sudo vi /etc/nginx/sites-enabled/default
# Default server configuration
#
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	~

	#root /var/www/html;
	root /home/nnyn/vscode-debug-specs/php;

	# pass PHP scripts to FastCGI server
	#
	location ~ \.php$ {
		include snippets/fastcgi-php.conf;

		# With php-fpm (or other unix sockets):
		fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
		#  # With php-cgi (or other tcp sockets):
		#  fastcgi_pass 127.0.0.1:9000;
	}
}
```

#### 3. enable Xdebug

add remote_enable setting

```
sudo vi /etc/php/7.0/fpm/conf.d/20-xdebug.ini

xdebug.remote_enable=1
xdebug.remote_autostart=1
xdebug.remote_port="9000"
xdebug.profiler_enable=0
xdebug.profiler_output_dir="/tmp"
xdebug.max_nesting_level=1000
xdebug.idekey = "PHPSTORM"
```

#### 4. start

```
sudo systemctl start php7.0-fpm.service
sudo systemctl start nginx.service
```

## attach running and remote process

enable php-xdebug below instraction.

### launch.json

select debug php, this setting will be created.

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Listen for XDebug",
			"type": "php",
			"request": "launch",
			"port": 9000
		}
	]
}
```

## execute program

select debug php, this setting will be created.

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Launch currently open script",
			"type": "php",
			"request": "launch",
			"program": "${file}",
			"cwd": "${fileDirname}",
			"port": 9000
		}
	]
}
```

## remote debug

 1. add your ip to `xdebug.remote_host` and restart php

```
zend_extension=xdebug.so
xdebug.remote_enable=1
xdebug.remote_autostart=1
xdebug.remote_port="9000"
xdebug.remote_host="192.168.1.21"
xdebug.remote_connect_back=1
xdebug.profiler_enable=0
xdebug.profiler_output_dir="/tmp"
xdebug.max_nesting_level=1000
xdebug.idekey="PHPSTORM"
```

 2. write launch.json

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "attach remote XDebug",
			"type": "php",
			"request": "launch",
			"server": "192.168.1.24",
			"port": 9000,
			"pathMappings": {
				"/home/nnyn/vscode-debug-specs/php": "${workspaceFolder}"
			}
		},
	]
}
```

 3. start debugging