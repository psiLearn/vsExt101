//#r "../node_modules/fable-core/Fable.Core.dll"
module AdventExtension.VsExt101

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.Import.vscode

type CatInfo = string * string
let cats =
  [
    "Coding Cat", "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
    "Compiling Cat", "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif"
    "Testing Cat", "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
  ]
let nCats = cats.Length
let createhtml (catInfo: CatInfo) =
 sprintf """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <h>%s</h>
    <img src="%s" width="300" />
</body>
</html>""" (fst catInfo) (snd catInfo)

let activate (context : vscode.ExtensionContext) = 
  printfn "starte regestrierung"
  let mutable currentPanel:WebviewPanel option = None
  vscode.commands.registerCommand("vsExt101.sendMessage", fun _ ->
    window.showInformationMessage "wenn Du dies lesen kannst, dann funktioniert es!" 
    |> unbox )
  |> context.subscriptions.Add
  vscode.commands.registerCommand("vsExt101.startWebView", fun _ ->
    // let pathONDisk = 
    //   vscode.Uri.file <| System.IO.Path.Combine (
    //       [|
    //             context.extensionPath
    //             "media"
    //             "cat.gif" 
    //       |])
    match currentPanel with 
    | Some panel -> 
      //panel.reveal ( vscode.ViewColumn.One, true)
      panel.reveal ()
      ()
    | None  -> 
      let options = null
      let panel = vscode.window.createWebviewPanel("catCoding", "cat coding", U2.Case1 vscode.ViewColumn.One,options)
      currentPanel <- Some <| panel

      let updateView i =
        //
        printfn "i: %d" i
        let cat = cats.[i%nCats]
        panel.title <- fst cat
        panel.webview.html <- createhtml cat
      updateView 0
      
      panel.onDidChangeViewState.Invoke((fun e ->
        match e.webviewPanel.viewColumn with
        | Some vscode.ViewColumn.One -> updateView 0
        | Some vscode.ViewColumn.Two -> updateView 1
        | Some vscode.ViewColumn.Three -> updateView 2
        | _ -> ()     
        null ),
        null,context.subscriptions |> seq |> Seq.map unbox |> ResizeArray) |> ignore
      //let interval = JS.setInterval (fun () -> updateView (System.DateTime.Now.Second )) 1000
      //let timeout = JS.setTimeout (fun () -> panel.dispose()|> ignore) 50000

      panel.onDidDispose.Invoke ((fun _ -> 
        printfn "clearing interval"
        currentPanel <- None
        //JS.clearTimeout(timeout)
        //JS.clearInterval(interval) 
        null)
        ,None,context.subscriptions |> seq |> Seq.map unbox |> ResizeArray ) |> ignore
        
    currentPanel |> unbox )
  |> context.subscriptions.Add
  