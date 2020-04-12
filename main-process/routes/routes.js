const { ipcMain } = require('electron');
const { EventEmitter } = require('events');
const { controllers, events } = require('../controllers');

const eventEmitter = new EventEmitter();

eventEmitter.on('new-docker-events', events.processEventsList);

ipcMain.on('get-containers', controllers.getContainers);

ipcMain.on('get-projects', controllers.getProjects);

ipcMain.on('get-images', controllers.getImages);

ipcMain.on('get-volumes', controllers.getVolumes);

ipcMain.on('get-networks', controllers.getNetworks);
