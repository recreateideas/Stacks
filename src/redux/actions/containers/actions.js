/* eslint-disable import/no-cycle */
import types from './types';
import store from '../../store';

const { ipcRenderer } = window.require('electron');

const setContainer = container => ({
    type: types.SET_CONTAINER,
    data: container,
});

const getContainers = () => () => ipcRenderer.send('get-containers');
ipcRenderer.on('containers', (event, containers) => {
    store.dispatch({
        type: types.SET_CONTAINERS,
        data: containers,
    });
});

export {
    setContainer,
    getContainers,
};
