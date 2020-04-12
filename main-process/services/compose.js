const fs = require('fs');
const yaml = require('js-yaml');

const getYamlAsJSON = paths => paths.map(path => yaml.safeLoad(fs.readFileSync(path, 'utf8')));

module.exports = {
    getYamlAsJSON,
};
