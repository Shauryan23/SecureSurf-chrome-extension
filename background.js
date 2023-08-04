// Function to handle the onCompleted event
function onNavigationCompleted(details) {
  console.log('Navigation completed for URL:', details.url);
}

// Add a listener for the onCompleted event with filters
const filters = {
  url: [{ urlMatches: '^https://www.google.com/search' }],
};

chrome.webNavigation.onCompleted.addListener(onNavigationCompleted, filters);
