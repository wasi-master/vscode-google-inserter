// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const axios = require('axios').default;
const template = require('lodash.template');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {

	// Loading all the settings
	const config = vscode.workspace.getConfiguration("google-inserter");

	const displayLanguage: any = config.get("display_language", "en");
	const resultsLanguage: any = config.get("search_language", "en");
	const safeSearch: any = config.get("safe_search", "active");
	const resultsCountry: any = config.get("search_country");
	const customFields: any = config.get("api_response_fields");



	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let searchAndInsertFromGoogle = vscode.commands.registerCommand('google-inserter.searchAndInsertFromGoogle', () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			console.error('Could not find an active editor');
			return false;
		}
		// Loading language specific settings
		const config = vscode.workspace.getConfiguration("google-inserter", editor.document);
		const contentFormat: any = config.get("format", "${title} - ${link}");
		const formatText: any = template(contentFormat);
		const currentSelection = editor.selection;
		const currentlySelectedText = editor.document.getText(currentSelection);
		vscode.window.showInputBox({
			"prompt": "The thing to search for",
			"ignoreFocusOut": true,
		}).then(searchTerm => {
			vscode.window.withProgress({
				location: vscode.ProgressLocation.Window,
				cancellable: false,
				title: 'Loading google search results.'
			}, async (progress) => {
				var apiKey = await context.secrets.get("googleApiKey");
				console.debug(apiKey);
				if (apiKey === undefined) {
					vscode.window.showErrorMessage("No API key found, consider reading the documentation on how to configure this extension",
						...["Go to documentation", "Cancel"]).then((answer) => {
							if (answer === "Go to documentation") {
								vscode.env.openExternal(vscode.Uri.parse("https://wasi-master.github.io/vscode-google-inserter/index.html#setup"));
							}
						});
					return false;
				}
				progress.report({ increment: 0 });
				// For more info see https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters
				var url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=015786823554162166929:mywctwj8es4&hr=${displayLanguage.toLowerCase()}&lr=lang_${resultsLanguage.toLowerCase()}&safe=${safeSearch ? 'active' : 'off'}&q=${searchTerm}`;
				if (resultsCountry) {
					url += `&cr=${resultsCountry}`;
				}
				if (customFields) {
					url += `&fields=${customFields}`;
				}
				const { data } = await axios.get(url);
				if ("error" in data) {
					if (data.error.errors[0].domain === "usageLimits") {
						vscode.window.showErrorMessage("API Limit (100) exceeded for today");
						return false;
					}
					console.error(data);
					vscode.window.showErrorMessage("A Error occurred while searching. see OUTPUT panel (Ctrl+Shift+U) for more information");
					return false;
				}
				if (!("items" in data)) {
					console.error(data);
					vscode.window.showErrorMessage("A Error occurred while searching. see OUTPUT panel (Ctrl+Shift+U) for more information");
					return false;
				}
				var results = data.items;
				console.log(results);
				vscode.window.showQuickPick(
					results.map((item: any) => {
						return {
							label: item.title,
							description: item.link,
							detail: item.snippet,
							canPickMany: false
						};
					})).then((item: any) => {
						if (item === undefined) { return false; }
						editor?.edit(editBuilder => {
							editBuilder.replace(currentSelection,
								formatText(Object.assign(results.find((i: any) => i.link === item.description), { "selectedText": currentlySelectedText }))
							);
						});
					});
				progress.report({ increment: 100 });
			});
		});
	});
	context.subscriptions.push(searchAndInsertFromGoogle);
	let addApiKey = vscode.commands.registerCommand('google-inserter.addApiKey', () => {
		vscode.window.showInputBox({
			"prompt": "Enter the API key",
			"ignoreFocusOut": true,
		}).then(apiKey => {
			if (!apiKey) {
				return false;
			}
			vscode.window.withProgress({
				location: vscode.ProgressLocation.Window,
				cancellable: false,
				title: 'Checking API key validity...',
			}, async (progress) => {
				progress.report({ increment: 0 });
				const { data } = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey.trim()}&cx=015786823554162166929:mywctwj8es4&safe=active&q=test`);
				if ("error" in data) {
					console.error(data);
					vscode.window.showErrorMessage("A Error occurred while checking api key. see OUTPUT panel (Ctrl+Shift+U) for more information");
				} else {
					await context.secrets.store("googleApiKey", apiKey.trim());
					console.debug("Stored api key: " + apiKey.trim());
					vscode.window.showInformationMessage("API Key saved successfully.");
				}
				progress.report({ increment: 100 });
			});
		});
	});
	context.subscriptions.push(addApiKey);
	let removeApiKey = vscode.commands.registerCommand('google-inserter.removeApiKey', () => {
		vscode.window.withProgress({
			location: vscode.ProgressLocation.Window,
			cancellable: false,
			title: 'Deleting API Key',
		}, async (progress) => {
			progress.report({ increment: 0 });
			try {
				await context.secrets.delete("googleApiKey");
				vscode.window.showInformationMessage("API Key deleted successfully.");
			} catch (e) {
				vscode.window.showErrorMessage("Failed to delete API Key " + e);
			}
			progress.report({ increment: 100 });
		});
	});
	context.subscriptions.push(removeApiKey);

}

// this method is called when your extension is deactivated
export function deactivate() { }
