const { ipcMain } = require('electron');

ipcMain.on('asynchronous-message', (event, args) => {
    console.log(args);
    event.sender.send('asynchronous-reply', 'pong');
});
