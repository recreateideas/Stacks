const childProcess = require('child_process');

const inspectContainer = name => childProcess.execSync(`docker container inspect ${name}`).toString();

module.exports = {
    inspectContainer,
};
