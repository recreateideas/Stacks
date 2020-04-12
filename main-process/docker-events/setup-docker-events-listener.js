const childProcess = require('child_process');
const { EventEmitter } = require('events');
const eventHandler = require('./event-handler');

const eventEmitter = new EventEmitter();

const { stdout: dockerEvents } = childProcess.spawn('docker', ['events', '--format', '{{json .}}']);

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
