// eslint-disable-next-line import/no-cycle
import store from '../../store';
import types from './types';

const { ipcRenderer } = window.require('electron');

const setNetwork = network => ({
    type: types.SET_NETWORK,
    data: network,
});

const getNetworks = () => () => ipcRenderer.send('get-networks');
ipcRenderer.on('networks', (event, networks) => {
    store.dispatch({
        type: types.SET_NETWORKS,
        data: networks,
    });
});

export {
    getNetworks,
    setNetwork,
};
