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

export {
    getProjects,
    setProject,
};
