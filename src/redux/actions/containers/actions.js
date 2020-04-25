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

const inspectContainer = ({ serviceName, containerId }) => () => ipcRenderer.send('inspect-container', { serviceName, containerId });
ipcRenderer.on('container-inspected-data', (event, payload) => {
    const { data, containerId } = payload;
    const extradata = data;
    store.dispatch({
        type: types.SET_CONTAINER_EXTRA_DATA,
        data: { extradata, containerId },
    });
});

const runContainerAction = args => (dispatch) => {
    const { containerId } = args;
    dispatch({
        type: types.SET_CONTAINER_INFO,
        data: { containerId, info: { loading: true } },
    });
    ipcRenderer.send('container-action', args);
};
/* ipcRenderer.on('container-action-result', (event, payload) => {
    const { containerId } = payload;
    store.dispatch({
        type: types.SET_CONTAINER_INFO,
        data: { containerId, info: { loading: false } },
    });
}); */

ipcRenderer.on('new-docker-events', (e, events) => {
    store.dispatch({
        type: types.NEW_DOCKER_EVENTS,
    });
    const hasContainersEvents = !!events.filter(event => event.Type === 'container').length;
    if (hasContainersEvents) {
        getContainers()();
    }
});

ipcRenderer.on('new-container-logs', (e, logs) => {
    store.dispatch({
        type: types.NEW_DOCKER_LOGS,
    });
    console.log(logs);
});

export {
    setContainer,
    getContainers,
    runContainerAction,
    inspectContainer,
};
