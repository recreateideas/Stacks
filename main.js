/* eslint-disable no-console, global-require, import/no-dynamic-require */
const logger = require('electron-log');
require('update-electron-app')({
    logger,
});
const {
    default: installExtension,
    REDUX_DEVTOOLS,
    REACT_DEVELOPER_TOOLS,
} = require('electron-devtools-installer');
const contextMenu = require('electron-context-menu');
const path = require('path');
const { app, ipcMain, BrowserWindow } = require('electron');
const url = require('url');

const debug = /--debug/.test(process.argv[2]);

let mainWindow = null;

if (process.mas) {
    app.setName('Moby');
}

const addReactReduxDevTools = () => {
    installExtension(REACT_DEVELOPER_TOOLS)
        .then(name => console.log(`Added Extension: ${name}`))
        .catch(err => console.log(`An error occurred: ${err}`));
    installExtension(REDUX_DEVTOOLS)
        .then(name => console.log(`Added Extension: ${name}`))
        .catch(err => console.log(`An error occurred: ${err}`));
};

const makeSingleInstance = () => {
    if (process.mas) { return; }

    app.requestSingleInstanceLock();
    app.allowRendererProcessReuse = false;

    app.on('second-instance', () => {
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
        }
    });
};

const loadMainProcess = () => {
    const setupMainProcess = require(path.join(__dirname, '/main-process/main.js'));
    setupMainProcess(mainWindow);
};

const initialize = () => {
    makeSingleInstance();
    const createWindow = () => {
        const windowOptions = {
            width: 1080,
            minWidth: 680,
            minHeight: 480,
            height: 740,
            title: app.name,
            webPreferences: {
                nodeIntegration: true,
            },
            frame: false,
            show: false,
            'standard-window': false,
        };

        mainWindow = new BrowserWindow(windowOptions);
        mainWindow.setTitle('Moby');
        const startUrl = process.env.PORT
            ? `http://localhost:${process.env.PORT}`
            : url.format({
                pathname: path.join(__dirname, './build/index.html'),
                protocol: 'file',
                slashes: true,
            });
        mainWindow.loadURL(startUrl);
        if (debug) {
            process.env.NODE_ENV = 'development';
            mainWindow.webContents.openDevTools();
            mainWindow.maximize();
            require('devtron').install();
            addReactReduxDevTools();
            contextMenu({
                labels: {
                    cut: 'Cut',
                    copy: 'Copy',
                    paste: 'Paste',
                    inspect: 'Inspect Element',
                },
            });
        }

        mainWindow.once('ready-to-show', () => {
            mainWindow.show();
        });

        mainWindow.on('closed', () => {
            mainWindow = null;
        });
    };

    const openViewInNewWindow = (event, payload) => {
        const {
            config: {
                title,
                config,
            },
            view,
        } = payload;
        const name = `popup-view-${view}`;
        const newWindow = new BrowserWindow({
            name,
            webPreferences: {
                nodeIntegration: true,
            },
            show: false,
            ...config,
        });
        newWindow.setTitle(title);
        const isDev = process.env.NODE_ENV === 'development';
        if (isDev) {
            newWindow.webContents.openDevTools();
            require('devtron').install();
            addReactReduxDevTools();
        }
        const viewUrl = isDev && process.env.PORT
            ? `http://localhost:${process.env.PORT}?${view}`
            : url.format({
                pathname: path.join(__dirname, `./build/index.html?${view}`),
                protocol: 'file',
                slashes: true,
            });
        newWindow.loadURL(decodeURIComponent(viewUrl));
        newWindow.once('ready-to-show', () => {
            mainWindow.webContents.send('window-ready', { view });
            newWindow.show();
        });
    };

    ipcMain.on('new-view', openViewInNewWindow);

    app.on('ready', () => {
        createWindow();
        loadMainProcess();
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (mainWindow === null) {
            createWindow();
        }
    });
};

initialize();
