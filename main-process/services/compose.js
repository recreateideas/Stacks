const fs = require('fs');
const json = require('js-yaml');
const childProcess = require('child_process');
const yaml = require('json-to-pretty-yaml');

const _runCommand = (command, parse) => {
    const output = childProcess.execSync(command).toString();
    return parse ? JSON.parse(output) : output;
};

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

const containerAction = (args) => {
    const { composeFile, action, serviceName } = args;
    const command = `docker-compose -f ${composeFile} ${action} ${serviceName}`;
    const result = _runCommand(command, false);
    return result;
};

module.exports = {
    getFile,
    getYamlAsJSON,
    getYamlAsObject,
    saveJsonAsYaml,
    saveAsIs,
    containerAction,
};
