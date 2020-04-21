const { compose } = require('../services');

const saveToFile = (event, args) => {
    const { path, content, convert } = args;
    let method;
    switch (convert) {
        case 'json-to-yaml':
            method = 'saveJsonAsYaml';
            break;
        case 'as-is':
            method = 'saveAsIs';
            break;
        default:
            break;
    }
    compose[method](path, content);
};

const getFileContent = (event, args) => {
    const { path, responseEventName } = args;
    const content = compose.getFile(path);
    event.sender.send(responseEventName, { content, path });
};

module.exports = {
    saveToFile,
    getFileContent,
};
