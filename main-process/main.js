require('./routes');
const { events } = require('./controllers');
const { docker } = require('./services');

const { stdout: dockerEvents } = docker.listenToEvents();

dockerEvents.on('data', events.handleRawEvents);
