require('./routes');
const { events } = require('./controllers');
const { docker } = require('./services');

const setupMainProcess = (win) => {
    const { stdout: dockerEvents } = docker.listenToEvents();

    dockerEvents.on('data', events.handleRawEvents(win));
};

module.exports = setupMainProcess;
