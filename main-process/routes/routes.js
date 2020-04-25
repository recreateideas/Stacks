const { ipcMain } = require('electron');
const { docker, files } = require('../controllers');

ipcMain.on('save-to-file', files.saveToFile);

ipcMain.on('get-file-content', files.getFileContent);

ipcMain.on('select-multiple-files', files.selectMultipleFiles);

ipcMain.on('get-containers', docker.getContainers);

ipcMain.on('get-projects', docker.getProjects);

ipcMain.on('get-images', docker.getImages);

ipcMain.on('get-volumes', docker.getVolumes);

ipcMain.on('get-networks', docker.getNetworks);

ipcMain.on('container-action', docker.containerAction);

ipcMain.on('inspect-container', docker.inspectContainer);
