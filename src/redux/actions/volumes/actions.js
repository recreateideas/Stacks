// eslint-disable-next-line import/no-cycle
import store from '../../store';
import types from './types';

const { ipcRenderer } = window.require('electron');

const setVolume = volume => ({
    type: types.SET_VOLUME,
    data: volume,
});

const getVolumes = () => () => ipcRenderer.send('get-volumes');
ipcRenderer.on('volumes', (event, volumes) => {
    store.dispatch({
        type: types.SET_VOLUMES,
        data: volumes,
    });
});

export {
    setVolume,
    getVolumes,
};
