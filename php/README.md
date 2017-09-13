---
title: How to Debugging PHP with VSCode
permalink: /php/
---
# How to Debugging PHP with VSCode

## Summary

* [Basic](#basic), [Spec](#spec)
* [attach running and remote process](#attach-running-and-remote-process)

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

## 
