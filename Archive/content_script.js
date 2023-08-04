function scrapeLinks() {
  const searchDiv = document.getElementById('search');
  if (!searchDiv) {
    console.log('Could not find the search results div.');
    return;
  }

  // Find all anchor tags inside div elements with a class name starting with "g"
  const anchorTags = searchDiv.querySelectorAll('div[class^="g"] a');

  // Convert the NodeList to an array and filter out anchor tags with a class attribute
  const filteredAnchorTags = Array.from(anchorTags).filter(
    (anchorTag) => !anchorTag.getAttribute('class')
  );

  const scrapedLinks = filteredAnchorTags.map((anchorTag) =>
    anchorTag.getAttribute('href')
  );

  // Send the scraped links to the popup.js script
  chrome.runtime.sendMessage({ links: scrapedLinks });
}

// Execute the scraping function when the content script is injected
scrapeLinks();
