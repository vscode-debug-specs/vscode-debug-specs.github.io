launch-server-macos:
	launchctl load -w /usr/local/opt/php56/homebrew.mxcl.php56.plist
	nginx
stop-server-macos:
	launchctl unload -w /usr/local/opt/php56/homebrew.mxcl.php56.plist
	nginx -s stop