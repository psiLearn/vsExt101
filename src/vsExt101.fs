//#r "../node_modules/fable-core/Fable.Core.dll"
module AdventExtension.VsExt101

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.Import.vscode

let activate (context : vscode.ExtensionContext) = 
  printfn "starte regestrierung"
  vscode.commands.registerCommand("vsExt101.startWebView", fun _ ->
    window.showInformationMessage "wenn Du dies lesen kannst, dann funktioniert es!" 
    |> unbox )
  |> context.subscriptions.Add