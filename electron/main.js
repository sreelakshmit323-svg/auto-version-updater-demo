const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");


    const {checkForUpdates}=require("./updater");


function createWindow(){


    const win = new BrowserWindow({

       

        width:1200,
        height:800,

        webPreferences:{
            preload:path.join(
                __dirname,
                "preload.js"
            ),
             contextIsolation:true,

            nodeIntegration:false
        }

    });

 win.removeMenu();
    win.loadURL("http://localhost:5173");

}

ipcMain.on(
    "check-update",
    ()=>{

        checkForUpdates();

    }
);


app.whenReady().then(()=>{
    createWindow();
});