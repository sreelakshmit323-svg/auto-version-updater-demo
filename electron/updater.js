const { autoUpdater } = require("electron-updater");
const { BrowserWindow, app } = require("electron");


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

    console.log("Manual update check started");
    console.log("Current version:", app.getVersion());

    autoUpdater.checkForUpdates();

}



autoUpdater.on(
    "checking-for-update",
    ()=>{

        console.log("Checking...");
        sendStatus(
            "Checking for update..."
        );

    }
);



autoUpdater.on(
    "update-available",
    (info)=>{

        console.log("Update found:", info.version);

        sendStatus(
            `Update available: ${info.version}`
        );

    }
);



autoUpdater.on(
    "update-not-available",
    ()=>{

        console.log("No update");

        sendStatus(
            "You are using latest version"
        );

    }
);



autoUpdater.on(
    "download-progress",
    (progress)=>{

        console.log(
            "Downloading:",
            progress.percent
        );

        sendStatus(
            `Downloading ${Math.round(progress.percent)}%`
        );

    }
);



autoUpdater.on(
    "update-downloaded",
    (info)=>{

        console.log(
            "Downloaded version:",
            info.version
        );

        sendStatus(
            "Update downloaded. Restarting..."
        );


        setTimeout(()=>{

            autoUpdater.quitAndInstall();

        },2000);

    }
);



autoUpdater.on(
    "error",
    (error)=>{

        console.log(
            "UPDATE ERROR:",
            error
        );

        sendStatus(
            "Update error: " + error.message
        );

    }
);



module.exports = {
    checkForUpdates
};