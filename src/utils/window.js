const { ipcRenderer } = window.require('electron');

const openViewInNewWindow = (view, config) => {
    const payload = {
        view,
        config,
    };
    ipcRenderer.send('new-view', payload);
};

const saveContentToFile = (path, content, convert) => {
    const payload = { path, content, convert };
    ipcRenderer.send('save-to-file', payload);
};

export {
    saveContentToFile,
    openViewInNewWindow,
};
