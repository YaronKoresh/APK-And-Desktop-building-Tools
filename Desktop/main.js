const { app, BrowserWindow } = require('electron');
app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
		app.whenReady().then(() => {
			const mainWindow = new BrowserWindow({
				width: 800,
				height: 600
			});
			app.whenReady().then(() => {
				mainWindow.loadFile('index.html');
			});
		});
	};
});
