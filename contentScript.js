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

  // NEW
  const myStylesClass = `
    color: red;
    font-size: 16px;
  `;

  const styleElement = document.createElement('style');
  styleElement.textContent = `.my-element {${myStylesClass}}`;
  document.head.appendChild(styleElement);

  // NEW

  finalFilteredAnchorTags.forEach((anchor) => {
    const h3Element = anchor.querySelector('h3');

    if (h3Element) {
      // Create your dynamically added element
      // const myElement = document.createElement('div');
      // myElement.textContent = 'Hello, world!';
      h3Element.classList.add('my-element'); // Apply the defined class to the element
      // document.body.appendChild(myElement);
      // h3Element.insertAdjacentElement('afterend', myElement);
      // Insert the new text node after the h3 element
      // h3Element.insertAdjacentText('afterend', 'SAFE');
    }
  });

  const scrapedLinks = finalFilteredAnchorTags.map((anchorTag) =>
    anchorTag.getAttribute('href')
  );

  console.log('ANCHOR TAGS: ', finalFilteredAnchorTags.length);
  console.log('SCRAPED LINKS: ', scrapedLinks.length);
})();

//NOTE YOU HAVE FIGURED ONE MORE DISTINGUISHING FACTORS FOR LINKS. YOU NEED TO FILTER OUT THOSE ANCHOR TAGS THAT HAVE AN H3 TAG
