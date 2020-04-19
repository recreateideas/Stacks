const fs = require('fs');
const json = require('js-yaml');
const yaml = require('json-to-pretty-yaml');

const getFile = path => fs.readFileSync(path, 'utf8');

const getYamlAsJSON = paths => paths.map(path => json.safeLoad(fs.readFileSync(path, 'utf8')));

const saveJsonAsYaml = (path, jsonContent) => {
    fs.writeFileSync(path, yaml.stringify(JSON.parse(jsonContent)));
};

const saveAsIs = (path, content) => {
    fs.writeFileSync(path, content);
};

const getYamlAsObject = paths => paths.reduce((allYamls, path) => ({
    ...allYamls,
    [path]: json.safeLoad(fs.readFileSync(path, 'utf8')),
}), {});

module.exports = {
    getFile,
    getYamlAsJSON,
    getYamlAsObject,
    saveJsonAsYaml,
    saveAsIs,
};
