const electron = require('electron')
const path = require('path')
const log = require('electron-log');

const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote

const notifyBtn = document.getElementById('notifyBtn')

notifyBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    mainWindow = remote.getCurrentWindow()
    let childWindow = new BrowserWindow({
        //frame: false,
        width: 400,
        height: 200,
        //      alwaysOnTop: true,
        parent: mainWindow,
        modal: true,
        webPreferences: {
            nodeIntegration: true
        }

    });
    //childWindow.webContents.openDevTools()
    childWindow.on('close', function() { childWindow = null })
    childWindow.loadURL(modalPath)
    childWindow.show()
})