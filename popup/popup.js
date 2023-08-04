// Function to set the badge to indicate offline status
function setBadgeToOffline() {
  chrome.action.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
  chrome.action.setBadgeText({ text: 'X' });
}

// Get the button element by its ID
const button = document.getElementById('myButton');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Toggle the paragraph visibility (as shown in the previous example)
  const paragraph = document.getElementById('myParagraph');
  if (paragraph.style.display === 'none') {
    paragraph.style.display = 'block';
    setBadgeToOffline();
  } else {
    paragraph.style.display = 'none';
    chrome.action.setBadgeText({ text: '' });
  }
});
