// Function to handle the onCompleted event
function onNavigationCompleted(details) {
  console.log('Navigation completed for URL:', details.url);

  // Inject a content script to access the document object of the loaded page
  chrome.scripting.executeScript({
    target: { tabId: details.tabId },
    files: ['contentScript.js'],
  });
}

// Add a listener for the onCompleted event with filters
const filters = {
  url: [{ urlMatches: '^https://www.google.com/search' }],
};

chrome.webNavigation.onCompleted.addListener(onNavigationCompleted, filters);
