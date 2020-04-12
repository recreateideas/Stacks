const { EventEmitter } = require('events');
const { listenToEvents: _listenToEvents } = require('./utils');

const eventEmitter = new EventEmitter();

let inDebounce;
let events = [];

const { stdout: dockerEvents } = _listenToEvents();
dockerEvents.on('data', (chunk) => {
    const parsed = chunk
        .toString()
        .split(/\n/)
        .filter(item => item)
        .map(item => JSON.parse(item));
    events = events.concat(parsed);
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
        eventEmitter.emit('new-docker-events', events);
        events = [];
    }, 1000);
});
