const { ipcMain } = require('electron');
const {
    listContainers: _listContainers,
    getDockerCompose: _getDockerCompose,
} = require('../utils');

ipcMain.on('get-containers', (event) => {
    const all = true;
    const containers = _listContainers(all);
    event.sender.send('containers', containers);
});

ipcMain.on('get-projects', (event) => {
    const all = true;
    const containers = _listContainers(all);
    const projectsPaths = containers.map(container => container.Labels['com.docker.compose.project.config_files']);
    const uniquePaths = projectsPaths.filter((path, index) => projectsPaths.indexOf(path) === index);
    const projects = _getDockerCompose(uniquePaths);
    event.sender.send('projects', projects);
});
