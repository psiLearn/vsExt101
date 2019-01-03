"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextEditorSelectionChangeKind$reflection = TextEditorSelectionChangeKind$reflection;
exports.TextEditorCursorStyle$reflection = TextEditorCursorStyle$reflection;
exports.TextEditorLineNumbersStyle$reflection = TextEditorLineNumbersStyle$reflection;
exports.TextEditorRevealType$reflection = TextEditorRevealType$reflection;
exports.OverviewRulerLane$reflection = OverviewRulerLane$reflection;
exports.EndOfLine$reflection = EndOfLine$reflection;
exports.DocumentHighlightKind$reflection = DocumentHighlightKind$reflection;
exports.SymbolKind$reflection = SymbolKind$reflection;
exports.CompletionItemKind$reflection = CompletionItemKind$reflection;
exports.TreeItemCollapsibleState$reflection = TreeItemCollapsibleState$reflection;
exports.IndentAction$reflection = IndentAction$reflection;
exports.DiagnosticSeverity$reflection = DiagnosticSeverity$reflection;
exports.ViewColumn$reflection = ViewColumn$reflection;
exports.StatusBarAlignment$reflection = StatusBarAlignment$reflection;
exports.ProgressLocation$reflection = ProgressLocation$reflection;
exports.TextDocumentSaveReason$reflection = TextDocumentSaveReason$reflection;
exports.extensions = exports.scm = exports.languages = exports.workspace = exports.window$ = exports.commands = exports.env = exports.TextDocumentSaveReason = exports.ProgressLocation = exports.StatusBarAlignment = exports.ViewColumn = exports.Diagnostic = exports.DiagnosticSeverity = exports.Location = exports.IndentAction = exports.TreeItem = exports.TreeItemCollapsibleState = exports.DocumentLink = exports.CompletionList = exports.CompletionItem = exports.CompletionItemKind = exports.SignatureHelp = exports.SignatureInformation = exports.ParameterInformation = exports.SnippetString = exports.WorkspaceEdit = exports.TextEdit = exports.SymbolInformation = exports.SymbolKind = exports.DocumentHighlight = exports.DocumentHighlightKind = exports.Hover = exports.CodeLens = exports.EventEmitter$00601 = exports.Disposable = exports.CancellationTokenSource = exports.Uri = exports.EndOfLine = exports.OverviewRulerLane = exports.TextEditorRevealType = exports.TextEditorLineNumbersStyle = exports.TextEditorCursorStyle = exports.TextEditorSelectionChangeKind = exports.Selection = exports.Range$ = exports.Position = exports.version = void 0;

var _vscode = require("vscode");

var _Types = require("../fable-library.2.1.8/Types");

var _Reflection = require("../fable-library.2.1.8/Reflection");

const version = _vscode.version;
exports.version = version;
const Position = _vscode.Position;
exports.Position = Position;
const Range$ = _vscode.Range;
exports.Range$ = Range$;
const Selection = _vscode.Selection;
exports.Selection = Selection;
const TextEditorSelectionChangeKind = (0, _Types.declare)(function Fable_Import_vscode_TextEditorSelectionChangeKind(arg1, arg2, arg3, arg4) {
  this.value__ = arg1 | 0;
  this.Keyboard = arg2;
  this.Mouse = arg3;
  this.Command = arg4;
}, _Types.Record);
exports.TextEditorSelectionChangeKind = TextEditorSelectionChangeKind;

function TextEditorSelectionChangeKind$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.TextEditorSelectionChangeKind");
}

const TextEditorCursorStyle = (0, _Types.declare)(function Fable_Import_vscode_TextEditorCursorStyle(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.value__ = arg1 | 0;
  this.Line = arg2;
  this.Block = arg3;
  this.Underline = arg4;
  this.LineThin = arg5;
  this.BlockOutline = arg6;
  this.UnderlineThin = arg7;
}, _Types.Record);
exports.TextEditorCursorStyle = TextEditorCursorStyle;

function TextEditorCursorStyle$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.TextEditorCursorStyle");
}

const TextEditorLineNumbersStyle = (0, _Types.declare)(function Fable_Import_vscode_TextEditorLineNumbersStyle(arg1, arg2, arg3, arg4) {
  this.value__ = arg1 | 0;
  this.Off = arg2;
  this.On = arg3;
  this.Relative = arg4;
}, _Types.Record);
exports.TextEditorLineNumbersStyle = TextEditorLineNumbersStyle;

function TextEditorLineNumbersStyle$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.TextEditorLineNumbersStyle");
}

const TextEditorRevealType = (0, _Types.declare)(function Fable_Import_vscode_TextEditorRevealType(arg1, arg2, arg3, arg4, arg5) {
  this.value__ = arg1 | 0;
  this.Default = arg2;
  this.InCenter = arg3;
  this.InCenterIfOutsideViewport = arg4;
  this.AtTop = arg5;
}, _Types.Record);
exports.TextEditorRevealType = TextEditorRevealType;

function TextEditorRevealType$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.TextEditorRevealType");
}

const OverviewRulerLane = (0, _Types.declare)(function Fable_Import_vscode_OverviewRulerLane(arg1, arg2, arg3, arg4, arg5) {
  this.value__ = arg1 | 0;
  this.Left = arg2;
  this.Center = arg3;
  this.Right = arg4;
  this.Full = arg5;
}, _Types.Record);
exports.OverviewRulerLane = OverviewRulerLane;

function OverviewRulerLane$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.OverviewRulerLane");
}

const EndOfLine = (0, _Types.declare)(function Fable_Import_vscode_EndOfLine(arg1, arg2, arg3) {
  this.value__ = arg1 | 0;
  this.LF = arg2;
  this.CRLF = arg3;
}, _Types.Record);
exports.EndOfLine = EndOfLine;

function EndOfLine$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.EndOfLine");
}

const Uri = _vscode.Uri;
exports.Uri = Uri;
const CancellationTokenSource = _vscode.CancellationTokenSource;
exports.CancellationTokenSource = CancellationTokenSource;
const Disposable = _vscode.Disposable;
exports.Disposable = Disposable;
const EventEmitter$00601 = _vscode.EventEmitter;
exports.EventEmitter$00601 = EventEmitter$00601;
const CodeLens = _vscode.CodeLens;
exports.CodeLens = CodeLens;
const Hover = _vscode.Hover;
exports.Hover = Hover;
const DocumentHighlightKind = (0, _Types.declare)(function Fable_Import_vscode_DocumentHighlightKind(arg1, arg2, arg3, arg4) {
  this.value__ = arg1 | 0;
  this.Text = arg2;
  this.Read = arg3;
  this.Write = arg4;
}, _Types.Record);
exports.DocumentHighlightKind = DocumentHighlightKind;

function DocumentHighlightKind$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.DocumentHighlightKind");
}

const DocumentHighlight = _vscode.DocumentHighlight;
exports.DocumentHighlight = DocumentHighlight;
const SymbolKind = (0, _Types.declare)(function Fable_Import_vscode_SymbolKind(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27) {
  this.value__ = arg1 | 0;
  this.File = arg2;
  this.Module = arg3;
  this.Namespace = arg4;
  this.Package = arg5;
  this.Class = arg6;
  this.Method = arg7;
  this.Property = arg8;
  this.Field = arg9;
  this.Constructor = arg10;
  this.Enum = arg11;
  this.Interface = arg12;
  this.Function = arg13;
  this.Variable = arg14;
  this.Constant = arg15;
  this.String = arg16;
  this.Number = arg17;
  this.Boolean = arg18;
  this.Array = arg19;
  this.Object = arg20;
  this.Key = arg21;
  this.Null = arg22;
  this.EnumMember = arg23;
  this.Struct = arg24;
  this.Event = arg25;
  this.Operator = arg26;
  this.TypeParameter = arg27;
}, _Types.Record);
exports.SymbolKind = SymbolKind;

function SymbolKind$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.SymbolKind");
}

const SymbolInformation = _vscode.SymbolInformation;
exports.SymbolInformation = SymbolInformation;
const TextEdit = _vscode.TextEdit;
exports.TextEdit = TextEdit;
const WorkspaceEdit = _vscode.WorkspaceEdit;
exports.WorkspaceEdit = WorkspaceEdit;
const SnippetString = _vscode.SnippetString;
exports.SnippetString = SnippetString;
const ParameterInformation = _vscode.ParameterInformation;
exports.ParameterInformation = ParameterInformation;
const SignatureInformation = _vscode.SignatureInformation;
exports.SignatureInformation = SignatureInformation;
const SignatureHelp = _vscode.SignatureHelp;
exports.SignatureHelp = SignatureHelp;
const CompletionItemKind = (0, _Types.declare)(function Fable_Import_vscode_CompletionItemKind(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26) {
  this.value__ = arg1 | 0;
  this.Text = arg2;
  this.Method = arg3;
  this.Function = arg4;
  this.Constructor = arg5;
  this.Field = arg6;
  this.Variable = arg7;
  this.Class = arg8;
  this.Interface = arg9;
  this.Module = arg10;
  this.Property = arg11;
  this.Unit = arg12;
  this.Value = arg13;
  this.Enum = arg14;
  this.Keyword = arg15;
  this.Snippet = arg16;
  this.Color = arg17;
  this.Reference = arg18;
  this.File = arg19;
  this.Folder = arg20;
  this.EnumMember = arg21;
  this.Constant = arg22;
  this.Struct = arg23;
  this.Event = arg24;
  this.Operator = arg25;
  this.TypeParameter = arg26;
}, _Types.Record);
exports.CompletionItemKind = CompletionItemKind;

function CompletionItemKind$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.CompletionItemKind");
}

const CompletionItem = _vscode.CompletionItem;
exports.CompletionItem = CompletionItem;
const CompletionList = _vscode.CompletionList;
exports.CompletionList = CompletionList;
const DocumentLink = _vscode.DocumentLink;
exports.DocumentLink = DocumentLink;
const TreeItemCollapsibleState = (0, _Types.declare)(function Fable_Import_vscode_TreeItemCollapsibleState(arg1, arg2, arg3, arg4) {
  this.value__ = arg1 | 0;
  this.None = arg2;
  this.Collapsed = arg3;
  this.Expanded = arg4;
}, _Types.Record);
exports.TreeItemCollapsibleState = TreeItemCollapsibleState;

function TreeItemCollapsibleState$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.TreeItemCollapsibleState");
}

const TreeItem = _vscode.TreeItem;
exports.TreeItem = TreeItem;
const IndentAction = (0, _Types.declare)(function Fable_Import_vscode_IndentAction(arg1, arg2, arg3, arg4, arg5) {
  this.value__ = arg1 | 0;
  this.None = arg2;
  this.Indent = arg3;
  this.IndentOutdent = arg4;
  this.Outdent = arg5;
}, _Types.Record);
exports.IndentAction = IndentAction;

function IndentAction$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.IndentAction");
}

const Location = _vscode.Location;
exports.Location = Location;
const DiagnosticSeverity = (0, _Types.declare)(function Fable_Import_vscode_DiagnosticSeverity(arg1, arg2, arg3, arg4, arg5) {
  this.value__ = arg1 | 0;
  this.Error = arg2;
  this.Warning = arg3;
  this.Information = arg4;
  this.Hint = arg5;
}, _Types.Record);
exports.DiagnosticSeverity = DiagnosticSeverity;

function DiagnosticSeverity$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.DiagnosticSeverity");
}

const Diagnostic = _vscode.Diagnostic;
exports.Diagnostic = Diagnostic;
const ViewColumn = (0, _Types.declare)(function Fable_Import_vscode_ViewColumn(arg1, arg2, arg3, arg4) {
  this.value__ = arg1 | 0;
  this.One = arg2;
  this.Two = arg3;
  this.Three = arg4;
}, _Types.Record);
exports.ViewColumn = ViewColumn;

function ViewColumn$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.ViewColumn");
}

const StatusBarAlignment = (0, _Types.declare)(function Fable_Import_vscode_StatusBarAlignment(arg1, arg2, arg3) {
  this.value__ = arg1 | 0;
  this.Left = arg2;
  this.Right = arg3;
}, _Types.Record);
exports.StatusBarAlignment = StatusBarAlignment;

function StatusBarAlignment$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.StatusBarAlignment");
}

const ProgressLocation = (0, _Types.declare)(function Fable_Import_vscode_ProgressLocation(arg1, arg2, arg3) {
  this.value__ = arg1 | 0;
  this.SourceControl = arg2;
  this.Window = arg3;
}, _Types.Record);
exports.ProgressLocation = ProgressLocation;

function ProgressLocation$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.ProgressLocation");
}

const TextDocumentSaveReason = (0, _Types.declare)(function Fable_Import_vscode_TextDocumentSaveReason(arg1, arg2, arg3, arg4) {
  this.value__ = arg1 | 0;
  this.Manual = arg2;
  this.AfterDelay = arg3;
  this.FocusOut = arg4;
}, _Types.Record);
exports.TextDocumentSaveReason = TextDocumentSaveReason;

function TextDocumentSaveReason$reflection() {
  return (0, _Reflection.type)("Fable.Import.vscode.TextDocumentSaveReason");
}

const env = _vscode.env;
exports.env = env;
const commands = _vscode.commands;
exports.commands = commands;
const window$ = _vscode.window;
exports.window$ = window$;
const workspace = _vscode.workspace;
exports.workspace = workspace;
const languages = _vscode.languages;
exports.languages = languages;
const scm = _vscode.scm;
exports.scm = scm;
const extensions = _vscode.extensions;
exports.extensions = extensions;