chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ emails: [] });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'foundEmails' && Array.isArray(message.emails)) {
    chrome.storage.local.get({ emails: [] }, ({ emails }) => {
      const combined = [...new Set(emails.concat(message.emails))];
      chrome.storage.local.set({ emails: combined });
    });
  }
});
