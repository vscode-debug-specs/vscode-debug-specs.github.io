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

## instruction

### MacOS

PHP(PHP-fpm)+nginx

MacOS has php7.1 and apache2 with no instruction. This instruction does not use it.

#### 1. install php

```
brew install php@7.2
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

#### install xdebug

```
pecl install xdebug
```

/usr/local/Cellar/php/7.2.8/pecl/20170718/xdebug.so

#### 4. start php-fpm and nginx

```
brew services start php@7.2
brew services start nginx
```

access http://localhost:8080/


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

* nginx log: /usr/local/var/log/nginx/
* php log: /usr/local/var/log/php-fpm.log

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
* change unix socket path(php7.0-fpm.sock->php7.2-fpm.sock)
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
		fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
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
xdebug.remote_port="9001"
xdebug.profiler_enable=0
xdebug.profiler_output_dir="/tmp"
xdebug.max_nesting_level=1000
xdebug.idekey = "PHPSTORM"
```

#### 4. start

```
sudo systemctl start php7.2-fpm.service
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
			"port": 9001
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
xdebug.remote_port="9001"
xdebug.remote_host="0.0.0.0"
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
			"port": 9001,
			"pathMappings": {
				"/home/nnyn/vscode-debug-specs/php": "${workspaceFolder}"
			}
		},
	]
}
```

 3. start debugging