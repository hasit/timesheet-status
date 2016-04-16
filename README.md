# timesheet-status

Check your ESS timesheet status with ease from your menubar.

If you are a student employee on any UW campus and check Employee Self-Service (ESS) at MyUW regularly to see if and when you'll be receiving that next fat paycheck, this is the right app for you.

![timesheet-status app](assets/screenshot.png)

As you can see from the screenshot, **timesheet-status** shows the correct status right in your menubar with a pretty little icon.

## Builds

- [Mac OSX](https://github.com/hasit/timesheet-status/releases/download/v1.0.0/timesheet-status-darwin.app.zip)
- [Windows 64 bit](https://github.com/hasit/timesheet-status/releases/download/v1.0.0/timesheet-status-win32-x64.exe)
- [Windows 32 bit](https://github.com/hasit/timesheet-status/releases/download/v1.0.0/timesheet-status-win32-ia32.exe)
- Linux - Since I do not have a Linux machine, this would be hard to work with. Check [issue 1](https://github.com/hasit/timesheet-status/issues/1) for more information on this.

## Development and Contribution

1. Fork the repository
2. Change working directory `cd timesheet-status`
3. Install dependencies `npm install`
4. Make changes
5. Merge them into your forked repository
6. Send pull request
7. Repeat from step 2

Following is a list of features I'd like to add going forward. If you happen to implement any of these or find an issue, send out a PR and I will be more than happy to merge the changes.

- [ ] Add 'Refresh' in contextMenu to manually refresh the status.
- [ ] Auto-refresh in default (say 10 minutes) internal.
- [ ] Add 'Preferences' window to set Auto-refresh interval.
- [ ] Add ability to see past timesheet statuses.

## Credit

- Icon made by [freepik](http://www.flaticon.com/authors/freepik) from [www.flaticon.com](www.flaticon.com).
- [Electron](http://electron.atom.io) for making the cross-platform app.
- [cheerio](https://github.com/cheeriojs/cheerio) for reading HTML.
- This application is in no way related to UW. This is my personal project to ease my workflow. It was hacked together in one sleepless night (literally).
