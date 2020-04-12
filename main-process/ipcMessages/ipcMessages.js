const { ipcMain } = require('electron');
const { listContainers } = require('../utils');

ipcMain.on('get-containers', (event) => {
    const all = true;
    const containers = listContainers(all);
    event.sender.send('containers', containers);
});
