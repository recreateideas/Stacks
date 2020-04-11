const childProcess = require('child_process');
const { EventEmitter } = require('events');
const fs = require('fs');
const yaml = require('js-yaml');
const eventHandler = require('./event-handler');
const { inspectContainer } = require('../utils');

const eventEmitter = new EventEmitter();

const { stdout: dockerEvents } = childProcess.spawn('docker', ['events', '--format', '{{json .}}']);

const dockerComposeYaml = yaml.safeLoad(fs.readFileSync('/Users/claudio/claud.io/docker/docker-compose.dev.yml', 'utf8'));

console.log(dockerComposeYaml);
console.log(JSON.parse(inspectContainer('db'))[0].Config.Labels['com.docker.compose.project.config_files']);

let inDebounce;
let eventsList = [];
dockerEvents.on('data', (chunk) => {
    const parsed = chunk
        .toString()
        .split(/\n/)
        .filter(item => item)
        .map(item => JSON.parse(item));
    eventsList = eventsList.concat(parsed);
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
        eventEmitter.emit('new-docker-event', eventsList);
        eventsList = [];
    }, 1000);
});

eventEmitter.on('new-docker-event', eventHandler);
