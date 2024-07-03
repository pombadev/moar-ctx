import { type ExtensionContext, window, commands } from 'vscode';

export function activate(context: ExtensionContext) {
  const disposable = commands.registerCommand('moar-ctx.findSelectionInFiles', () => {

    const selection = window.activeTextEditor?.document.getText(window.activeTextEditor?.selection);

    commands.executeCommand("workbench.action.findInFiles", {
      query: selection
    });
  });

  context.subscriptions.push(disposable);
}
