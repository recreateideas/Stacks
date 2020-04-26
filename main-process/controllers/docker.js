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
    const statuses = Object.keys(containers).reduce((accumulator, id) => {
        const { Labels, Status } = containers[id];
        const path = Labels['com.docker.compose.project.config_files'];
        const serviceName = Labels['com.docker.compose.service'];
        return {
            ...accumulator,
            [path]: {
                ...accumulator[path],
                [serviceName]: /^Up/.test(Status),
            },
        };
    }, {});
    const uniquePaths = projectsPaths.filter((path, index) => projectsPaths.indexOf(path) === index);
    const yamls = compose.getYamlAsObject(uniquePaths);
    const projects = Object.keys(yamls).reduce((allProjects, path) => ({
        ...allProjects,
        [path]: {
            config: yamls[path],
            activeServices: statuses[path],
        },
    }), {});
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

const containerAction = (event, args) => {
    const { composeFile } = args;
    const service = composeFile ? compose : docker;
    const result = service.containerAction(args);
    event.sender.send('container-action-result', { ...args, result });
};

const composeAction = (event, args) => {
    const result = compose.composeAction(args);
    event.sender.send('compose-action-result', { ...args, result });
};

const inspectContainer = (event, args) => {
    const { serviceName, containerId } = args;
    const [container] = docker.inspectContainer(serviceName);
    const [stats] = docker.containerStats(serviceName);
    const data = { ...container, stats };
    event.sender.send('container-inspected-data', { data, containerId });
};

module.exports = {
    getContainers,
    getProjects,
    getImages,
    getVolumes,
    getNetworks,
    containerAction,
    composeAction,
    inspectContainer,
};
