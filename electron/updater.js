const { autoUpdater } = require("electron-updater");


autoUpdater.autoDownload = false;


function checkForUpdates(){

    if(process.env.NODE_ENV === "development"){

        console.log(
            "Development mode: skipping real update check"
        );

        return;

    }


    autoUpdater.checkForUpdates();

}


autoUpdater.on(
    "checking-for-update",
    ()=>{

        console.log(
            "Checking GitHub releases..."
        );

    }
);


autoUpdater.on(
    "update-available",
    (info)=>{

        console.log(
            "Update available:",
            info.version
        );

    }
);


autoUpdater.on(
    "update-not-available",
    ()=>{

        console.log(
            "No update available"
        );

    }
);


autoUpdater.on(
    "error",
    (error)=>{

        console.log(
            "Updater error:",
            error.message
        );

    }
);


module.exports = {
    checkForUpdates
};