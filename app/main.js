import { app, BrowserWindow, shell, screen, Menu } from 'electron';
import storage from 'electron-json-storage';
import Authentication from './utils/authentication';
import menu from './menu';

// メインウィンドウはGCされないようにグローバル宣言
let mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', () => {
  Menu.setApplicationMenu(menu);
  new Authentication((token) => {
    storage.set('auth', token, (error) => {
      if (error) throw error;
    });

    // メイン画面の表示。ウィンドウの幅、高さを指定できる
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

    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  });
});
