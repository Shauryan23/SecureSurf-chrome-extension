(() => {
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

  const finalFilteredAnchorTags = Array.from(filteredAnchorTags).filter(
    (anchorTag) => {
      const h3Element = anchorTag.querySelector('h3');
      return h3Element !== null;
    }
  );

  finalFilteredAnchorTags.forEach((anchor) => {
    const h3Element = anchor.querySelector('h3');

    h3Element.addEventListener('click', function (event) {
      event.preventDefault();
      h3Element.classList.toggle('jitter-text');
    });

    if (h3Element) {
      // Insert the new text node after the h3 element
      h3Element.insertAdjacentText('afterend', 'SAFE');
    }
  });

  const scrapedLinks = finalFilteredAnchorTags.map((anchorTag) =>
    anchorTag.getAttribute('href')
  );

  console.log('ANCHOR TAGS: ', finalFilteredAnchorTags.length);
  console.log('SCRAPED LINKS: ', scrapedLinks.length);
})();
