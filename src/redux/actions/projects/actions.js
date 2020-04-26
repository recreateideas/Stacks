/* eslint-disable import/no-cycle */
import types from './types';
import store from '../../store';

const { ipcRenderer } = window.require('electron');

const mergeProjects = (projects1, projects2) => {
    const merged = {};
    Object.keys(projects1).forEach((path1) => {
        if (Object.keys(projects2).includes(path1)) {
            merged[path1] = { ...projects1[path1], ...projects2[path1] };
        } else {
            merged[path1] = projects1[path1];
        }
    });
    Object.keys(projects2).forEach((path2) => {
        if (!merged[path2]) {
            merged[path2] = projects2[path2];
        }
    });
    return merged;
};

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

const getProjects = () => () => ipcRenderer.send('get-projects');

ipcRenderer.on('projects', (event, liveProjects) => {
    const savedProjects = JSON.parse(localStorage.getItem('projects') || '{}');
    const mergedProjects = mergeProjects(savedProjects, liveProjects);
    store.dispatch({
        type: types.SET_LS_PROJECTS,
        data: mergedProjects,
    });
    store.dispatch({
        type: types.SET_LIVE_PROJECTS,
        data: liveProjects,
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

const runComposeAction = args => (dispatch) => {
    const { composeFile: path, category } = args;
    dispatch({
        type: types.SET_PROJECT_INFO,
        data: { category, path, info: { loading: true } },
    });
    ipcRenderer.send('compose-action', args);
};

ipcRenderer.on('new-docker-events', (e, events) => { // action is dispatched in containers
    const hasNetworkEvents = !!events.filter(event => event.Type === 'network').length;
    if (hasNetworkEvents) {
        getProjects()();
    }
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
    runComposeAction,
};
