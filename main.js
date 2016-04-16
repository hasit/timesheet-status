const path = require('path')
const electron = require('electron')
const cheerio = require('cheerio')
const fs = require('fs')
var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready', function () {
  var trayIcon = require('./tray')
  trayIcon.createTrayIcon()

  mainWindow = new BrowserWindow({
    width: 600,
    height: 400
  })
  mainWindow.loadURL('https://prp.admin.uw.edu/ess/uwnetid/timesheet.aspx')

  var webContents = mainWindow.webContents
  webContents.on('did-finish-load', function () {
    if (webContents.getTitle() === 'Employee Self Service - UW Timesheet') {
      app.dock.hide()
      mainWindow.hide()
      webContents.savePage(path.resolve(__dirname, 'timesheet.html'), 'HTMLOnly', function (error) {
        if (!error) {
          var $ = cheerio.load(fs.readFileSync(path.resolve(__dirname, 'timesheet.html')))
          var status = $('a[class=helpLinkUnderline]').html()
          trayIcon.setTitle(status)
        } else {
          console.error(error)
        }
      })
    }
  })

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
