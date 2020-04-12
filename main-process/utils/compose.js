const fs = require('fs');
const yaml = require('js-yaml');

const getDockerCompose = path => yaml.safeLoad(fs.readFileSync(path, 'utf8'));

module.exports = {
    getDockerCompose,
};
