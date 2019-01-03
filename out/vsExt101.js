"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createhtml = createhtml;
exports.activate = activate;
exports.nCats = exports.cats = void 0;

var _List = require("./fable-library.2.1.8/List");

var _String = require("./fable-library.2.1.8/String");

var _vscode = require("vscode");

var _Seq = require("./fable-library.2.1.8/Seq");

const cats = (0, _List.ofArray)([["Coding Cat", "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"], ["Compiling Cat", "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"], ["Testing Cat", "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"]]);
exports.cats = cats;
const nCats = (0, _List.length)(cats);
exports.nCats = nCats;

function createhtml(catInfo_0, catInfo_1) {
  const catInfo = [catInfo_0, catInfo_1];
  return (0, _String.toText)((0, _String.printf)("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Cat Coding</title>\r\n</head>\r\n<body>\r\n    <h>%s</h>\r\n    <img src=\"%s\" width=\"300\" />\r\n</body>\r\n</html>"))(catInfo[0])(catInfo[1]);
}

function activate(context) {
  (0, _String.toConsole)((0, _String.printf)("starte regestrierung"));
  let currentPanel = null;
  context.subscriptions.push(_vscode.commands.registerCommand("vsExt101.sendMessage", function (_arg1) {
    return _vscode.window.showInformationMessage("wenn Du dies lesen kannst, dann funktioniert es!");
  }));
  context.subscriptions.push(_vscode.commands.registerCommand("vsExt101.startWebView", function (_arg3) {
    if (currentPanel == null) {
      const options = null;

      const panel$$1 = _vscode.window.createWebviewPanel(["catCoding", "cat coding", 1, options]);

      currentPanel = panel$$1;

      const updateView = function updateView(i) {
        (0, _String.toConsole)((0, _String.printf)("i: %d"))(i);
        const cat = (0, _List.item)(i % nCats, cats);
        panel$$1.title = cat[0];
        panel$$1.webview.html = createhtml(cat[0], cat[1]);
      };

      updateView(0);
      panel$$1.onDidChangeViewState(function (e) {
        const matchValue = e.webviewPanel.viewColumn;
        var $target$$1;

        if (matchValue != null) {
          if (matchValue === 1) {
            $target$$1 = 0;
          } else if (matchValue === 2) {
            $target$$1 = 1;
          } else if (matchValue === 3) {
            $target$$1 = 2;
          } else {
            $target$$1 = 3;
          }
        } else {
          $target$$1 = 3;
        }

        switch ($target$$1) {
          case 0:
            {
              updateView(0);
              break;
            }

          case 1:
            {
              updateView(1);
              break;
            }

          case 2:
            {
              updateView(2);
              break;
            }
        }

        return null;
      }, null, Array.from((0, _Seq.map)(function mapping(value$$1) {
        return value$$1;
      }, context.subscriptions)));
      panel$$1.onDidDispose(function () {
        (0, _String.toConsole)((0, _String.printf)("clearing interval"));
        currentPanel = null;
        return null;
      }, null, Array.from((0, _Seq.map)(function mapping$$1(value$$3) {
        return value$$3;
      }, context.subscriptions)));
    } else {
      const panel = currentPanel;
      panel.reveal();
    }

    return currentPanel;
  }));
}