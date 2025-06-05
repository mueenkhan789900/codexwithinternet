(function() {
  const bodyText = document.body.innerText;
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
  const found = bodyText.match(emailRegex);
  if (found && found.length > 0) {
    chrome.runtime.sendMessage({ type: 'foundEmails', emails: found });
  }
})();
