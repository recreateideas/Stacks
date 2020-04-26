/* eslint-disable import/no-cycle */
import types from './types';
import store from '../../store';

const { ipcRenderer } = window.require('electron');

const updateLocalStorage = item => (value, defaultValue = '{}') => {
    const savedItems = localStorage.getItem(item) || defaultValue;
    const allSavedItems = { ...JSON.parse(savedItems), ...value };
    localStorage.setItem('projects', JSON.stringify(allSavedItems));
    return allSavedItems;
};

const setProject = project => (dispatch) => {
    const allSavedProjects = updateLocalStorage('projects')(project);
    dispatch({
        type: types.SET_LS_PROJECTS,
        data: allSavedProjects,
    });
};

const projectsLoadPending = ({
    type: types.SET_PROJECTS_LOAD_PENDING,
});

const projectsLoadComplete = ({
    type: types.SET_PROJECTS_LOAD_COMPLETE,
});

const getProjects = () => () => {
    const savedProjects = localStorage.getItem('projects') || '{}';
    store.dispatch({
        type: types.SET_LS_PROJECTS,
        data: JSON.parse(savedProjects),
    });
    ipcRenderer.send('get-projects');
};
ipcRenderer.on('projects', (event, projects) => {
    store.dispatch({
        type: types.SET_LIVE_PROJECTS,
        data: projects,
    });
});

const getYamlContent = path => () => ipcRenderer.send('get-file-content', { path, responseEventName: 'yaml-content' });
ipcRenderer.on('yaml-content', (event, data) => {
    const { content, path } = data;
    store.dispatch({
        type: types.SET_YAML_CONTENT,
        data: { content, path },
    });
});

const findFiles = fileTypes => () => {
    const typesExtensionsMap = {
        projects: ['yaml', 'yml', 'json', 'js'],
    };
    const type = fileTypes[0];
    const extensions = typesExtensionsMap[type]; // replace with .map for multiple filters
    const options = {
        filters: [
            {
                name: 'Custom File Type',
                extensions,
            },
        ],
    };
    const payload = { type, options, parseToJson: true };
    ipcRenderer.send('select-multiple-configs', payload);
};
ipcRenderer.on('selected-configs', (event, data) => {
    const { files = {} /* , type */ } = data;
    updateLocalStorage('projects')(files);
    store.dispatch({
        type: types.SET_LS_PROJECTS,
        data: files,
    });
});

ipcRenderer.on('window-ready', (event, data) => {
    const { view } = data;
    switch (view) {
        case 'ProjectEditYaml':
        default:
            store.dispatch(projectsLoadComplete);
            break;
    }
});

export {
    getProjects,
    setProject,
    getYamlContent,
    projectsLoadPending,
    projectsLoadComplete,
    findFiles,
};
