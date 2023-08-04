const searchDiv = document.getElementById('search');

const anchorTags = searchDiv.querySelectorAll('div[class^="g"] a');

const filteredAnchorTags = Array.from(anchorTags).filter(
  (anchorTag) => !anchorTag.getAttribute('class')
);

/* OTHER THINGS

anchorTags
NodeList(32) [a, a.l, a.l, a.l, a.l, a, a, a, a, a.a-no-hover-decoration, a.h4kbcd, a.Ndm45b, a, a.h4kbcd, a.Ndm45b, a.h4kbcd, a.Ndm45b, a.h4kbcd, a, a.h4kbcd, a.Ndm45b, a.LcmtUb, a, a, a, a, a, a, a, a, a, a]

const scrapedLinks = [];

  for (const anchorTag of anchorTags) {
    // Check if the anchor tag does not have a class attribute
    if (!anchorTag.getAttribute('class')) {
      const url = anchorTag.getAttribute('href');
      scrapedLinks.push(url);
    }
  }

  crapedLinks
(17) ['https://github.com/', 'https://docs.github.com/en/get-started/quickstart/…hosting,%2C%20commits%2C%20and%20pull%20requests.', 'https://www.freecodecamp.org/news/introduction-to-git-and-github/', 'https://resources.github.com/faq/#:~:text=Nope.,just%20to%20name%20a%20few.', 'https://digest.myhq.in/git-full-form/#:~:text=GIT%…lobal,powerful%20capabilities%20of%20this%20tool.', 'https://twitter.com/github/status/1686831507078332…src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet', 'https://twitter.com/github/status/1686417529688805…src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet', 'https://en.wikipedia.org/wiki/GitHub', 'http://en.wikipedia.org/wiki/Ruby_(programming_language)', 'http://en.wikipedia.org/wiki/JavaScript', 'http://en.wikipedia.org/wiki/Go_(programming_language)', 'http://en.wikipedia.org/wiki/C_(programming_language)', 'http://en.wikipedia.org/wiki/Rust_(programming_language)', 'https://github.blog/', 'https://kinsta.com/knowledgebase/what-is-github/', 'https://www.techtarget.com/searchitoperations/definition/GitHub', 'https://play.google.com/store/apps/details?id=com.github.android&hl=en&gl=US']

*/
