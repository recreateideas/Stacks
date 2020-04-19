/* eslint-disable import/no-cycle */
import types from './types';
import store from '../../store';

const { ipcRenderer } = window.require('electron');

ipcRenderer.on('new-docker-events', (event, events) => {
    console.log('###');
    const processEventsList = (list) => {
        const newContainersEvents = list.filter(item => item.Type === 'container');
        return newContainersEvents;
    };
    const containerEvents = processEventsList(events);
    console.log(containerEvents);
});

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

const runContainerAction = args => () => ipcRenderer.send('container-action', args);
// ipcRenderer.on('container-action', (event, containers) => {
//     store.dispatch({
//         type: types.SET_CONTAINERS,
//         data: containers,
//     });
// });

export {
    setContainer,
    getContainers,
    runContainerAction,
};
