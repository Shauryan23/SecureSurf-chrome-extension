document.addEventListener('DOMContentLoaded', function () {
  const scrapeButton = document.getElementById('scrapeButton');

  scrapeButton.addEventListener('click', function () {
    // Notify the content script to scrape the links
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content_script.js'],
      });
    });
  });

  // Listen for messages from the content script
  chrome.runtime.onMessage.addListener(function (message) {
    if (message.links) {
      console.log('Scraped Links:', message.links);
    }
  });
});
