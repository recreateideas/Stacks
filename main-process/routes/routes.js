const { ipcMain } = require('electron');
const { EventEmitter } = require('events');
const { controllers, events } = require('../controllers');

const eventEmitter = new EventEmitter();

eventEmitter.on('new-docker-events', events.processEventsList);

ipcMain.on('get-containers', controllers.getContainers);

ipcMain.on('get-projects', controllers.getProjects);
