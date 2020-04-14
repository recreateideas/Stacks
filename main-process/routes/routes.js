const { ipcMain } = require('electron');
const { EventEmitter } = require('events');
const { docker, events, files } = require('../controllers');

const eventEmitter = new EventEmitter();

eventEmitter.on('new-docker-events', events.processEventsList);

ipcMain.on('save-to-file', files.saveToFile);

ipcMain.on('get-containers', docker.getContainers);

ipcMain.on('get-projects', docker.getProjects);

ipcMain.on('get-images', docker.getImages);

ipcMain.on('get-volumes', docker.getVolumes);

ipcMain.on('get-networks', docker.getNetworks);
