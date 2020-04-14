/* eslint-disable import/no-cycle */
import types from './types';
import store from '../../store';

const { ipcRenderer } = window.require('electron');

const setProject = project => ({
    type: types.SET_PROJECT,
    data: project,
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

export {
    getProjects,
    setProject,
    getYamlContent,
};
