const {
    docker: {
        listContainers: _listContainers,
    },
    compose: {
        getDockerCompose: _getDockerCompose,
    },
} = require('../services');

const getContainers = (event) => {
    const all = true;
    const containers = _listContainers(all);
    event.sender.send('containers', containers);
};

const getProjects = (event) => {
    const all = true;
    const containers = _listContainers(all);
    const projectsPaths = Object.keys(containers).map(id => containers[id].Labels['com.docker.compose.project.config_files']);
    const uniquePaths = projectsPaths.filter((path, index) => projectsPaths.indexOf(path) === index);
    const projects = _getDockerCompose(uniquePaths);
    event.sender.send('projects', projects);
};

module.exports = {
    getContainers,
    getProjects,
};
