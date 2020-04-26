const { dialog } = require('electron');
const jsonLoader = require('js-yaml');
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

const selectMultipleConfigs = (event, args) => {
    const { options: optionsArgs, parseToJson } = args;
    const options = {
        properties: ['openFile', 'multiSelections'],
        ...optionsArgs,
    };
    const paths = dialog.showOpenDialogSync(options) || [];
    const doesNothing = res => res;
    const files = paths.reduce((allFiles, path) => {
        const parsedPath = path.split('.');
        const extension = parsedPath[parsedPath.length - 1];
        const middlewares = {
            json: doesNothing,
            yaml: jsonLoader.safeLoad,
            yml: jsonLoader.safeLoad,
        };
        const middleware = parseToJson && middlewares[extension] ? middlewares[extension] : doesNothing;
        const content = middleware(compose.getFile(path));
        return {
            ...allFiles,
            [path]: {
                config: content,
            },
        };
    }, {});
    event.sender.send('selected-configs', { ...args, files });
};

module.exports = {
    saveToFile,
    getFileContent,
    selectMultipleConfigs,
};
