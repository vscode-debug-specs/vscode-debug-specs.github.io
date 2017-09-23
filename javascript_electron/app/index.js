'use strict';

const electron = require('electron');
const path = require('path');
const url = require('url');
const app = electron.app;

let win = null;
app.on('ready', () => {

	// set root directory
	electron.protocol.interceptFileProtocol('file', (req, callback) => {
		const requestedUrl = req.url.substr(7);
		if (path.isAbsolute(requestedUrl)) {
			callback(path.normalize(path.join(__dirname, requestedUrl)));
		} else {
			callback(requestedUrl);
		}
	});

	const indexURL = url.format({
		pathname: "html/index.html",
		protocol: 'file:'
	});
	win = new electron.BrowserWindow({ width: 640, height: 480 });
	win.loadURL(indexURL);
});

app.on('window-all-closed', () => {
	app.quit();
});