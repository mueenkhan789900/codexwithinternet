# Codex With Internet Examples

This repository contains small web examples and a simple Chrome extension.

## Email Collector Extension

The `email_extractor_extension` directory includes a Chrome extension that
scans pages for email addresses and stores them using `chrome.storage`.

### Usage
1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode**.
3. Choose **Load unpacked** and select the `email_extractor_extension` folder.
4. Browse to any page. Detected email addresses will be saved automatically.
5. Click the extension icon to view the collected emails or clear the list.

### Development Notes
- The extension uses a content script (`content.js`) to search the page text
  for emails with a regular expression.
- Emails are stored in `chrome.storage.local` via a background service worker.
- The popup (`popup.html`/`popup.js`) displays saved addresses and lets you
  clear them.


