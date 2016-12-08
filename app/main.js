import { app, BrowserWindow, shell, screen, Menu } from 'electron';
import storage from 'electron-json-storage';
import Authentication from './utils/authentication';
import menu from './menu';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  Menu.setApplicationMenu(menu);
  new Authentication((token) => {
    storage.set('auth', token, (error) => {
      if (error) throw error;
    });

    mainWindow = new BrowserWindow({
      x: 0,
      y: 0,
      width: 500,
      height: screen.getPrimaryDisplay().size.height,
      webPreferences: {
        webSecurity: false
      }
    });

    mainWindow.webContents.on('new-window', (e, url) => {
      e.preventDefault();
      shell.openExternal(url);
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // mainWindow.openDevTools(true);

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  });
});
