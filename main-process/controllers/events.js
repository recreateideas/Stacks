const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

let inDebounce;
let events = [];
const handleRawEvents = (chunk) => {
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
};

const processEventsList = (list) => {
    const newContainersEvents = list.filter(item => item.Type === 'container');
    return newContainersEvents;
};

module.exports = {
    handleRawEvents,
    processEventsList,
};
