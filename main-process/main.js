require('./routes');
const { events } = require('./controllers');
const { docker } = require('./services');

const setupMainProcess = (win) => {
    const {
        stdout: dockerEvents,
        stderr: dockerErrors,
    } = docker.listenToEvents();
    dockerEvents.on('data', events.handleRawEvents(win));
    dockerErrors.on('data', events.handleRawEvents(win));
};

module.exports = setupMainProcess;
