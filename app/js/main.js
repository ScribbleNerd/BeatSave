const { remote } = require('electron');
const mainProcess = remote.require('../../src/js/node.js');

var config = undefined;
var songs = []

updateConfig(() => {
  if (config.installationLocation == "") {
    location.replace('selectgamefolder/index.html')
  }
})

function setInnerHTML(id, html, callback) {
  document.getElementById(id).innerHTML = html
  if (callback != undefined) {
    callback()
  }
}

function updateConfig(callback) {
  mainProcess.updateConfig((json) => {
    config = json
    callback()
  })
}