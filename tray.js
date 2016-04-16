const path = require('path')
const electron = require('electron')
const app = electron.app
const Menu = electron.Menu
const Tray = electron.Tray

var trayIcon = null

module.exports = {
  createTrayIcon: function () {
    trayIcon = new Tray(path.resolve(__dirname, 'icons/timesheet.png'))
    var contextMenu = Menu.buildFromTemplate([
      {
        label: 'Quit',
        click: function () {
          console.log('Quit clicked')
          app.quit()
        }
      }
    ])
    trayIcon.on('ready', function (event) {
      trayIcon.setToolTip('timesheet-status')
    })
    trayIcon.on('click', function (event) {
      trayIcon.popUpContextMenu(contextMenu)
    })
  },
  setTitle: function (title) {
    trayIcon.setTitle(title)
  }
}
