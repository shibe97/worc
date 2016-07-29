import { BrowserWindow, screen } from 'electron'
import NodeTwitterApi    from 'node-twitter-api'

let authWindow = null;

export default class Authentication {
  constructor(callback) {
    var nodeTwitterApi = new NodeTwitterApi({
      callback       : 'http://example.com',
      consumerKey    : 'AdfRer5kIrdPHmiNlYZPvxI5N',
      consumerSecret : 'dVLTFLgg21EfUzF56PARBDyhzibwCN4HJCQ4juulwFt9VS6Vx6',
    });

    nodeTwitterApi.getRequestToken((error, requestToken, requestTokenSecret) => {
      var oldWindow;
      var url = nodeTwitterApi.getAuthUrl(requestToken);
      if (authWindow) {
        oldWindow = authWindow;
      }

      authWindow = new BrowserWindow({
        width  : screen.getPrimaryDisplay().size.width,
        height : screen.getPrimaryDisplay().size.height
      });

      authWindow.webContents.on('will-navigate', (event, url) => {
        var matched = url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
        if (matched) {
          event.preventDefault();

          nodeTwitterApi.getAccessToken(requestToken, requestTokenSecret, matched[2], (error, accessToken, accessTokenSecret) => {
            var token = { accessToken: accessToken, accessTokenSecret: accessTokenSecret };
            callback(token);
            if (authWindow) {
              authWindow.close();
            }
          });
        }
      });

      authWindow.on('closed', function() {
        authWindow = null;
      });

      if (oldWindow) {
        oldWindow.close();
      }
      authWindow.loadURL(`${url}&force_login=true`);
    });
  }
}
