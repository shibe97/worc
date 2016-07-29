'use strict';

import { app, BrowserWindow, shell, screen } from 'electron';
import Authentication from './utils/authentication';
import storage from 'electron-json-storage';

// メインウィンドウはGCされないようにグローバル宣言
var mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on('ready', function() {
  new Authentication(function(token) {

    storage.set('auth', token, (error) => {
      if (error) throw error;
    });

    // メイン画面の表示。ウィンドウの幅、高さを指定できる
    mainWindow = new BrowserWindow({
      x: 0,
      y: 0,
      width: 500,
      height: screen.getPrimaryDisplay().size.height
    });

    mainWindow.webContents.on('new-window', (e, url) => {
      e.preventDefault();
      shell.openExternal(url);
    })

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.openDevTools(true);

    // ウィンドウが閉じられたらアプリも終了
    mainWindow.on('closed', function() {
      mainWindow = null;
    });
  });
});
