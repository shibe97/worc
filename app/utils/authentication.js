import { BrowserWindow, screen } from 'electron';
import NodeTwitterApi from 'node-twitter-api';

let authWindow = null;

export default class Authentication {
  constructor(callback) {
    const nodeTwitterApi = new NodeTwitterApi({
      callback: 'http://example.com',
      consumerKey: 'ML0rRHB8yfuhxf3lR0DtTzW5j',
      consumerSecret: 'lhGbkm21g5e65fUKk3nAvG0DTQMXMQOneNymhmkex5DqFxipHy',
    });

    nodeTwitterApi.getRequestToken((error, requestToken, requestTokenSecret) => {
      let oldWindow;
      const url = nodeTwitterApi.getAuthUrl(requestToken);
      if (authWindow) {
        oldWindow = authWindow;
      }

      authWindow = new BrowserWindow({
        width: screen.getPrimaryDisplay().size.width,
        height: screen.getPrimaryDisplay().size.height
      });

      authWindow.webContents.on('will-navigate', (event, _url) => {
        const matched = _url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/);
        if (matched) {
          event.preventDefault();

          nodeTwitterApi.getAccessToken(requestToken, requestTokenSecret, matched[2], (_error, accessToken, accessTokenSecret, results) => {
            if (error) {
              new Authentication(callback);
            } else {
              const { user_id, screen_name } = results;
              const token = { accessToken, accessTokenSecret, user_id, screen_name };
              callback(token);
              if (authWindow) {
                authWindow.close();
              }
            }
          });
        }
      });

      authWindow.on('closed', () => {
        authWindow = null;
      });

      if (oldWindow) {
        oldWindow.close();
      }
      authWindow.loadURL(`${url}&force_login=true`);
    });
  }
}
