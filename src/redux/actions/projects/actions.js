/* eslint-disable import/no-cycle */
import types from './types';
import store from '../../store';

const { ipcRenderer } = window.require('electron');

const setProject = project => ({
    type: types.SET_PROJECT,
    data: project,
});

const projectsLoadPending = ({
    type: types.SET_PROJECTS_LOAD_PENDING,
});

const projectsLoadComplete = ({
    type: types.SET_PROJECTS_LOAD_COMPLETE,
});

const getProjects = () => () => ipcRenderer.send('get-projects');
ipcRenderer.on('projects', (event, projects) => {
    store.dispatch({
        type: types.SET_PROJECTS,
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
};
