const childProcess = require('child_process');
const {
    parseLabels: _parseLabels,
    reduceArrayToObj: _reduceArrayToObj,
} = require('./helpers');

const _runCommandWithOptions = command => (options) => {
    const output = childProcess.execSync(`${command} ${options} --format '{{json .}}'`).toString();
    const joint = output.replace(/\n/gm, ',').replace(/,$/, '');
    return JSON.parse(`[${joint}]`);
};

const listContainers = (all) => {
    const command = 'docker ps';
    const options = all ? ' -a' : '';
    const containers = _runCommandWithOptions(command)(options);
    const parsedContainers = containers.map((container) => {
        const parsedContainer = container;
        parsedContainer.Labels = _parseLabels(container.Labels);
        return parsedContainer;
    });
    return _reduceArrayToObj(parsedContainers)('ID');
};

const listImages = (all) => {
    const command = 'docker image ls';
    const options = all ? ' -a' : '';
    const images = _runCommandWithOptions(command)(options);
    return _reduceArrayToObj(images)('ID');
};

const inspectContainer = name => JSON.parse(childProcess.execSync(`docker container inspect ${name}`).toString());

const listenToEvents = () => childProcess.spawn('docker', ['events', '--format', '{{json .}}']);

module.exports = {
    inspectContainer,
    listContainers,
    listImages,
    listenToEvents,
};
