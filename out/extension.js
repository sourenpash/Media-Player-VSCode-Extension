"use strict";
// import * as path from 'path';
// import { window, commands, ExtensionContext, ViewColumn, Uri } from 'vscode';
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// export function activate(context: ExtensionContext) {
//     console.log('Congratulations, your extension "sourenpash" is now active!');
//     let disposable = commands.registerCommand('sourenpash.openVideoPlayer', async (fileUri?: Uri) => {
//         // Use the provided fileUri if available, otherwise, show a file picker dialog
//         if (!fileUri) {
//             const selectedUris = await window.showOpenDialog({
//                 filters: {
//                     Videos: ['mp4', 'avi', 'mkv', 'mov', 'webm', 'ogg', 'flv'],
//                 },
//             });
//             if (selectedUris && selectedUris.length > 0) {
//                 fileUri = selectedUris[0]; // Use the first selected URI
//             }
//         }
//         if (fileUri) {
//             const panel = window.createWebviewPanel(
//                 'videoPlayer',
//                 'Video Player',
//                 ViewColumn.One, // Show the panel in the sidebar
//                 {
//                     enableScripts: true, // Enable scripts in the webview
//                 }
//             );
//             // Generate a file URI for the selected video file
//             const videoUri = panel.webview.asWebviewUri(fileUri);
//             // Load an HTML page with the video player in the webview
//             panel.webview.html = getWebViewContent(videoUri);
//         }
//     });
//     context.subscriptions.push(disposable);
// }
// function getWebViewContent(videoUri: Uri) {
//     return `
//         <html>
//         <head>
//             <title>Video Player</title>
//             <!-- Include Video.js library -->
//             <link href="https://vjs.zencdn.net/8.6.0/video-js.css" rel="stylesheet">
//             <script src="https://vjs.zencdn.net/8.6.0/video.js"></script>
//         </head>
//         <body>
//             <video-js id="my-video" class="video-js" controls preload="auto" width="640" height="360">
//                 <source src="${videoUri}" type="video/mp4">
//                 Your browser does not support the video tag.
//             </video-js>
//             <div>
//                 <p>Video Information:</p>
//                 <!-- You can add video information here -->
//             </div>
//             <script>
//                 // Initialize Video.js
//                 videojs('my-video');
//             </script>
//         </body>
//         </html>`;
// }
// export function deactivate() {}
const vscode = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "sourenpash" is now active!');
    context.subscriptions.push(vscode.workspace.registerTextDocumentContentProvider('testWebview', {
        provideTextDocumentContent: uri => {
            const videoUri = uri.toString();
            return getWebViewContent(videoUri);
        },
    }));
    let disposable = vscode.commands.registerCommand('sourenpash.openVideoPlayer', () => {
        // You can use this command for other purposes if needed
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function getWebViewContent(videoUri) {
    return `
        <html>
        <head>
            <title>Video Player</title>
            <!-- Include Video.js library -->
            <link href="https://vjs.zencdn.net/7.15.0/video-js.css" rel="stylesheet">
            <script src="https://vjs.zencdn.net/7.15.0/video.js"></script>
        </head>
        <body>
            <video-js id="my-video" class="video-js" controls preload="auto" width="640" height="360">
                <source src="${videoUri}" type="video/mp4">
                Your browser does not support the video tag.
            </video-js>
            <div>
                <p>Video Information:</p>
                <!-- You can add video information here -->
            </div>
            <script>
                // Initialize Video.js
                videojs('my-video');
            </script>
        </body>
        </html>`;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map