# electronJs-ensklopidia
Animal insklopidia desktop app
Hello, this animal insiklopedia desktop app. I used [Electro.js](https://www.electronjs.org/).
If you have front-development background, making desktop app with Electron.js will be super easy.

To start you have to run following command in cmd:

```
npm install && npm init
```
afetr some configuration.
Then run:

```
npm install electron --save-dev && npm install electron-packager --save-dev
```

Above, you will install electron to machine. And, electron-packager will be need to build desktop app in end.
So, you have to add build and start scripts to **package.json** file:

```
...
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  ...
```

My **package.json** file:"

```
{
  "name": "ensklapediya",
  "version": "1.0.0",
  "description": "hayvonot olami insklapediyasi",
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder"
  },
  "win": {
    "target": "squirrel"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Abdulxaq/electronJs-ensklopidia.git"
  },
  "author": "abdulkhak tursunov",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Abdulxaq/electronJs-ensklopidia/issues"
  },
  "homepage": "https://github.com/Abdulxaq/electronJs-ensklopidia#readme",
  "devDependencies": {
    "electron": "16.0.4",
    "electron-packager": "^15.4.0",
  }
}
```

**Main.js :**

```
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

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
```

And **index.html :**

```
<!--index.html-->

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <meta http-equiv="X-Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>"Hayvonot olami" bolalar ensklapediyasi </title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body id="body" >
    <div id="intro" >
        <p>
            <i>Hayvonot olami juda ham xilma-xildir. Hozirgi paytda yer yuzida 1500 mingdan ortiq hayvon turlari ma`lum. Shulardan ba`zi yirtqich hayvonlarni ensiklopediyamizga kiritdik. Sizga manzur bo`ladi degan umiddamaz.</i> <br><br>
            <b>Mirzajonova Mohinur</b>  tomonidan tayyorlandi.
        </p>
    </div>
    <iframe id="a" src="./a.pdf"></iframe>
    <!-- You can also require other files to run in this process -->
    <script src="./renderer.js"></script>
    <script src="./app.js"></script>
  </body>
</html>
```


