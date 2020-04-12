const fs = require('fs');
const yaml = require('js-yaml');

const getDockerCompose = paths => paths.map(path => yaml.safeLoad(fs.readFileSync(path, 'utf8')));

module.exports = {
    getDockerCompose,
};
