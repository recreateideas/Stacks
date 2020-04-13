const { ipcRenderer } = window.require('electron');

const openViewInNewWindow = (view) => {
    ipcRenderer.send('new-view', view);
};

export {
    // eslint-disable-next-line import/prefer-default-export
    openViewInNewWindow,
};
