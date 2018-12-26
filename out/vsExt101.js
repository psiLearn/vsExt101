"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;

var _String = require("./fable-library.2.1.8/String");

var _vscode = require("vscode");

function activate(context) {
  (0, _String.toConsole)((0, _String.printf)("starte regestrierung"));
  context.subscriptions.push(_vscode.commands.registerCommand("vsExt101.startWebView", function (_arg1) {
    return _vscode.window.showInformationMessage("wenn Du dies lesen kannst, dann funktioniert es!");
  }));
}