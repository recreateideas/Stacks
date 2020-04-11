/* eslint-disable no-console, global-require, import/no-dynamic-require */
const logger = require('electron-log');
const {
    default: installExtension,
    REDUX_DEVTOOLS,
    REACT_DEVELOPER_TOOLS,
} = require('electron-devtools-installer');
require('update-electron-app')({
    logger,
});
const path = require('path');
const glob = require('glob');
const devtron = require('devtron');
const { app, BrowserWindow } = require('electron');
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
    const files = glob.sync(path.join(__dirname, '/main-process/**/*.js'));
    files.forEach((file) => { require(file); });
};

const initialize = () => {
    makeSingleInstance();
    loadMainProcess();
    const createWindow = () => {
        const windowOptions = {
            width: 1080,
            minWidth: 680,
            minHeight: 480,
            height: 740,
            titleBarStyle: 'hidden',
            webPreferences: {
                nodeIntegration: true,
            },
        };

        mainWindow = new BrowserWindow(windowOptions);

        const startUrl = process.env.PORT
            ? `http://localhost:${process.env.PORT}`
            : url.format({
                pathname: path.join(__dirname, './build/index.html'),
                protocol: 'file:',
                slashes: true,
            });
        mainWindow.loadURL(startUrl);

        if (debug) {
            mainWindow.webContents.openDevTools();
            mainWindow.maximize();
            devtron.install();
            addReactReduxDevTools();
            require('electron-context-menu')({
                labels: {
                    cut: 'Cut',
                    copy: 'Copy',
                    paste: 'Paste',
                    copyImageAddress: 'Copy Image Address',
                    inspect: 'Inspect Element',
                },
            });
        }

        mainWindow.on('closed', () => {
            mainWindow = null;
        });
    };

    app.on('ready', () => {
        createWindow();
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
