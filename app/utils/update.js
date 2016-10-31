export const update = (autoUpdater) => {
  autoUpdater.setFeedURL('https://shibe97.github.io/worc/releases/latest.json');
  autoUpdater.checkForUpdates();
  autoUpdater.on('update-downloaded', () => {
    index = dialog.showMessageBox({
      message: 'Update available',
      detail: 'Do you try to reboot and update?',
      buttons: ["reboot", "later"]
    });
    if (index === 0) {
      autoUpdater.quitAndInstall();
    }
  });
  autoUpdater.on("update-not-available", () => {
    dialog.showMessageBox({
      message: "No updates.",
      buttons: ["OK"]
    });
  });
  autoUpdater.on("error", () => {
    dialog.showMessageBox({
      message: "An update error has occured.",
      buttons: ["OK"]
    });
  });
};
