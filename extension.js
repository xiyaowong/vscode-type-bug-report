// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	const handler = vscode.commands.registerTextEditorCommand("type", (_editor, _edit, { text }) => {
		if (text === "i")
			handler?.dispose();
	});

	const doc = await vscode.workspace.openTextDocument({ content: "aa" })
	const editor = await vscode.window.showTextDocument(doc)
	editor.selection = new vscode.Selection(0, 1, 0, 1);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
