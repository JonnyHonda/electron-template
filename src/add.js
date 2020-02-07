const electron = require('electron')
const path = require('path')
const remote = electron.remote
const closeBtn = document.getElementById('closeBtn')
const log = require('electron-log');

// error, warn, info, verbose, debug, silly
closeBtn.addEventListener('click', function(event) {
    var childWindow = remote.getCurrentWindow();
    childWindow.close();
})