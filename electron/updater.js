



const {autoUpdater} = require("electron-updater");

const {BrowserWindow} = require("electron");


function sendStatus(message){

    const win = BrowserWindow.getAllWindows()[0];

    if(win){

        win.webContents.send(
            "update-status",
            message
        );

    }

}


function checkForUpdates(){

    autoUpdater.checkForUpdates();

}


autoUpdater.on(
    "checking-for-update",
    ()=>{

        sendStatus(
            "Checking for update..."
        );

    }
);


autoUpdater.on(
    "update-available",
    ()=>{

        sendStatus(
            "Update available. Downloading..."
        );

    }
);


autoUpdater.on(
    "update-not-available",
    ()=>{

        sendStatus(
            "You are using latest version"
        );

    }
);


autoUpdater.on(
    "download-progress",
    (progress)=>{

        sendStatus(
            `Downloading ${Math.round(progress.percent)}%`
        );

    }
);


autoUpdater.on(
    "update-downloaded",
    ()=>{

        sendStatus(
            "Update ready. Restarting..."
        );

        autoUpdater.quitAndInstall();

    }
);


module.exports={
    checkForUpdates
};