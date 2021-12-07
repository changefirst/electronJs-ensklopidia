// main.js
// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, shell} = require('electron')
const path = require('path')

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        icon:'./s.png'
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    let menu = Menu.buildFromTemplate([
        {
            label: "Hayvonar",
            submenu: [
                { label: "Kobra iloni" },
                { label: "Sher" },
                { label: "Akulala" },
                { label: "Boʻri" },
                { label: "Burgut" },
                { label: "Ayiq" },
                { label: "Yoʻlbars" },
                { label: "Tulki" },
                { label: "Chayon" },
                { label: "Boyoʻgʻli" },
                { label: "Sirtlon" },
                { label: "Qoplon" },
                { label: "Anakonda" },
                { label: "Meduza" },
                { label: "Yaguar" },
                { label: "Begemot" },
                { label: "Echkemar" },
                {type: "separator"},
                { 
                    label: "Chiqish",
                    click(){
                        app.quit()
                    }
                }
            ]
        }
    ]);
    Menu.setApplicationMenu(menu);

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые интерфейсы API могут использоваться только после возникновения этого события.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
