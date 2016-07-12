'use strict';

import { app, BrowserWindow, shell } from 'electron';
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
        mainWindow = new BrowserWindow({width: 800, height: 600});
        mainWindow.loadURL('file://' + __dirname + '/index.html');
        mainWindow.openDevTools(true);

        mainWindow.webContents.on('new-window', (e, url) => {
            e.preventDefault();
            shell.openExternal(url);
        })

        // ウィンドウが閉じられたらアプリも終了
        mainWindow.on('closed', function() {
            mainWindow = null;
        });
    });
});
