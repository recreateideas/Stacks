const { docker, compose } = require('../services');

const getContainers = (event) => {
    const all = true;
    const containers = docker.listContainers(all);
    event.sender.send('containers', containers);
};

const getProjects = (event) => {
    const all = true;
    const containers = docker.listContainers(all);
    const projectsPaths = Object.keys(containers).map(id => containers[id].Labels['com.docker.compose.project.config_files']);
    const uniquePaths = projectsPaths.filter((path, index) => projectsPaths.indexOf(path) === index);
    const projects = compose.getYamlAsJSON(uniquePaths);
    event.sender.send('projects', projects);
};

const getImages = (event) => {
    const all = true;
    const images = docker.listImages(all);
    event.sender.send('images', images);
};

const getVolumes = (event) => {
    const volumes = docker.listVolumes();
    event.sender.send('volumes', volumes);
};

const getNetworks = (event) => {
    const networks = docker.listNetworks();
    event.sender.send('networks', networks);
};

module.exports = {
    getContainers,
    getProjects,
    getImages,
    getVolumes,
    getNetworks,
};
