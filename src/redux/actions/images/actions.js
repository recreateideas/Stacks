// eslint-disable-next-line import/no-cycle
import store from '../../store';
import types from './types';

const { ipcRenderer } = window.require('electron');

const setImage = image => ({
    type: types.SET_IMAGE,
    data: image,
});

const getImages = () => () => ipcRenderer.send('get-images');
ipcRenderer.on('images', (event, images) => {
    store.dispatch({
        type: types.SET_IMAGES,
        data: images,
    });
});

export {
    setImage,
    getImages,
};
