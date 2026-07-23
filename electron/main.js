const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const { checkForUpdates } = require("./updater");


function createWindow() {

    const win = new BrowserWindow({

        width: 1200,
        height: 800,

        webPreferences: {
            preload: path.join(
                __dirname,
                "preload.js"
            ),
            contextIsolation: true,
            nodeIntegration: false
        }

    });


    win.removeMenu();


    // Development
    if (!app.isPackaged) {

        win.loadURL("http://localhost:5173");

    } 
    
    // Production build
    else {

        win.loadFile(
            path.join(
                __dirname,
                "../frontend/dist/index.html"
            )
        );

    }

}



ipcMain.on(
    "check-update",
    () => {

        checkForUpdates();

    }
);



app.whenReady().then(() => {

    createWindow();

});