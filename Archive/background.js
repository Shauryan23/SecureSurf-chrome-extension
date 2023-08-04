chrome.webNavigation.onCompleted.addListener(function (details) {
  if (
    details.tabId > 0 &&
    details.url.startsWith('https://www.google.') &&
    url.includes('/search')
  ) {
    // Inject the content script to the current tab once Google search results are loaded
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['content_script.js'],
    });
  }
});
