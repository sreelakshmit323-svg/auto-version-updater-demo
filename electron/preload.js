const { contextBridge, ipcRenderer } = require("electron");


contextBridge.exposeInMainWorld(
    "electronAPI",
    {

        checkUpdate: () => {

            ipcRenderer.send(
                "check-update"
            );

        }

    }
);