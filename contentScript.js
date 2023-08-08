(() => {
  function extractData() {
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

    const linkHeadings = {};
    let cnt = 1;
    finalFilteredAnchorTags.forEach((anchor) => {
      const h3Element = anchor.querySelector('h3');

      if (h3Element) {
        linkHeadings[cnt] = anchor.getAttribute('href');
        cnt++;
      }
    });

    return {
      anchorTags: finalFilteredAnchorTags,
      domainLink: linkHeadings,
    };
  }

  const filteredAnchors = extractData();
  console.log(filteredAnchors);

  // finalFilteredAnchorTags.forEach((anchor) => {
  //   const h3Element = anchor.querySelector('h3');

  //   h3Element.addEventListener('click', function (event) {
  //     event.preventDefault();
  //     h3Element.classList.toggle('jitter-text');
  //   });

  //   if (h3Element) {
  //     /* SAFE SVG
  //     // Create Safe SVG element
  //     const safeSvgElement = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'svg'
  //     );
  //     safeSvgElement.setAttribute('width', '20');
  //     safeSvgElement.setAttribute('height', '20');
  //     safeSvgElement.setAttribute('viewBox', '0 0 20 20');
  //     safeSvgElement.setAttribute('fill', 'none');

  //     // Create the first path element
  //     const path1Element = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path1Element.setAttribute(
  //       'd',
  //       'M10 0C6.92687 3.22937 1.82312 2.5 1.82312 2.5C1.82312 2.5 1.82312 6.09375 1.82312 11.25C1.82312 16.4062 10 20 10 20C10 20 18.1769 16.4062 18.1769 11.25C18.1769 6.09375 18.1769 2.5 18.1769 2.5C18.1769 2.5 13.0731 3.22937 10 0Z'
  //     );
  //     path1Element.setAttribute('fill', '#32BEA6');

  //     // Create the second path element
  //     const path2Element = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path2Element.setAttribute(
  //       'd',
  //       'M9.40939 13.8931L5.78314 11.0606L6.55189 10.0756L9.12627 12.085L13.3038 5.93314L14.3375 6.63501L9.40939 13.8931Z'
  //     );
  //     path2Element.setAttribute('fill', 'white');

  //     // Append the path elements to the SVG element
  //     safeSvgElement.appendChild(path1Element);
  //     safeSvgElement.appendChild(path2Element);

  //     // Insert the SVG element after the h3 element
  //     h3Element.insertAdjacentElement('afterend', safeSvgElement);
  //     */
  //     /* UNSAFE SVG
  //     const unsafeSvgElement = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'svg'
  //     );
  //     unsafeSvgElement.setAttribute('width', '30');
  //     unsafeSvgElement.setAttribute('height', '30');

  //     // Create a group (g) element to hold the paths
  //     const groupElement = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'g'
  //     );

  //     // Create the first path element
  //     const path1 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path1.setAttribute(
  //       'd',
  //       'M20 5.85609V14.1439L14.1439 20H5.85609L0 14.1439V5.85609L5.85609 0H14.1439L20 5.85609Z'
  //     );
  //     path1.setAttribute('fill', '#E94B5C');

  //     // Create the second path element
  //     const path2 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path2.setAttribute(
  //       'd',
  //       'M13.5849 1.34918H6.41498L1.34912 6.41504V13.585L6.41498 18.6508H13.5849L18.6507 13.5849V6.415L13.5849 1.34918ZM18.1015 13.3569L13.3568 18.1015H6.64307L1.89846 13.3569V6.64313L6.64307 1.89852H13.3569L18.1015 6.64313V13.3569Z'
  //     );
  //     path2.setAttribute('fill', 'white');

  //     // Create the third path element
  //     const path3 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path3.setAttribute(
  //       'd',
  //       'M5.77895 10.3631C5.72758 10.2088 5.64082 10.0804 5.51875 9.97435C5.42559 9.88439 5.30996 9.81052 5.17824 9.75916C5.04652 9.70455 4.87949 9.66599 4.67391 9.63708L4.14711 9.55677C4.05074 9.54392 3.97363 9.52466 3.90941 9.49572C3.84516 9.47001 3.79055 9.4347 3.74238 9.39294C3.69742 9.34798 3.66527 9.29978 3.64602 9.24837C3.62992 9.19701 3.62031 9.14236 3.62031 9.08455C3.62031 8.93677 3.67492 8.80834 3.78414 8.69908C3.89336 8.5931 4.06359 8.53845 4.29488 8.53845C4.44266 8.53845 4.59363 8.55775 4.75746 8.58986C4.91809 8.62517 5.06586 8.70548 5.20398 8.8372L5.5734 8.48064L5.75008 8.31037C5.56055 8.12724 5.34852 7.99877 5.12367 7.92169C4.89559 7.84459 4.62898 7.80603 4.32059 7.80603C4.07965 7.80603 3.86445 7.83818 3.67488 7.9024C3.48535 7.96662 3.32477 8.05658 3.1898 8.17224C3.05813 8.28783 2.95852 8.42599 2.88785 8.58337C2.81719 8.744 2.78184 8.92064 2.78184 9.11662C2.78184 9.17119 2.78504 9.22584 2.79145 9.27724C2.81715 9.5663 2.91996 9.79443 3.09664 9.96466C3.19621 10.0578 3.31508 10.1317 3.4532 10.1895C3.58812 10.2506 3.75516 10.2923 3.95434 10.3213L4.48117 10.4016C4.59359 10.4177 4.67711 10.4337 4.73176 10.4561C4.78637 10.4754 4.83453 10.5044 4.87953 10.5461C4.9727 10.6361 5.01766 10.7549 5.01766 10.9027C5.01766 10.9605 5.01125 11.0119 4.99195 11.0601C4.96625 11.1597 4.90844 11.24 4.81848 11.3043C4.6868 11.3974 4.48762 11.4424 4.22742 11.4424C4.02504 11.4424 3.8323 11.4166 3.64918 11.3652C3.4693 11.3106 3.30547 11.2175 3.16734 11.0794L2.6084 11.6255C2.66301 11.6801 2.72086 11.7283 2.77867 11.7765C2.9457 11.9113 3.12879 12.0077 3.32477 12.0688C3.58816 12.1523 3.88691 12.194 4.22102 12.194C4.4523 12.194 4.67074 12.1651 4.86992 12.1074C5.0723 12.0463 5.24574 11.9628 5.39352 11.8504C5.53805 11.7411 5.65371 11.603 5.73723 11.4424C5.79828 11.3235 5.83684 11.1918 5.85289 11.0473C5.8593 10.9959 5.8625 10.9413 5.8625 10.8835C5.86246 10.6907 5.83355 10.5172 5.77895 10.3631Z'
  //     ); // Truncated for brevity
  //     path3.setAttribute('fill', 'white');

  //     const path4 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path4.setAttribute(
  //       'd',
  //       'M6.34436 7.84131V8.59299H7.50081V12.1587H8.36491V8.59299H9.51811V7.84131H6.34436Z'
  //     );
  //     path4.setAttribute('fill', 'white');

  //     const path5 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path5.setAttribute(
  //       'd',
  //       'M13.3279 9.44106C13.3215 9.27724 13.3055 9.12306 13.2765 8.98489C13.2476 8.84673 13.2027 8.71829 13.1416 8.59938C13.0806 8.4838 12.997 8.3681 12.8846 8.25888C12.7369 8.11435 12.5666 8.00192 12.3739 7.92481C12.1844 7.8445 11.9627 7.80591 11.7057 7.80591C11.4487 7.80591 11.2239 7.8445 11.0311 7.92481C10.8384 8.00192 10.6681 8.11435 10.5172 8.25888C10.4079 8.3681 10.3212 8.48376 10.2602 8.59938C10.1991 8.71829 10.1574 8.84673 10.1317 8.98489C10.1028 9.12306 10.0867 9.27724 10.0803 9.44106C10.0738 9.6081 10.0707 9.79442 10.0707 10C10.0707 10.0546 10.0707 10.1092 10.0739 10.1606C10.0739 10.3052 10.0771 10.4369 10.0803 10.559C10.0868 10.7228 10.1028 10.877 10.1317 11.0151C10.1574 11.1533 10.1992 11.2817 10.2602 11.4006C10.3213 11.5162 10.408 11.6319 10.5172 11.7411C10.6682 11.8856 10.8385 11.9981 11.0312 12.0752C11.2239 12.1555 11.4488 12.194 11.7058 12.194C11.9627 12.194 12.1844 12.1555 12.3739 12.0752C12.5667 11.9981 12.7369 11.8856 12.8847 11.7411C12.9971 11.6318 13.0806 11.5162 13.1417 11.4006C13.2027 11.2817 13.2476 11.1533 13.2766 11.0151C13.3055 10.877 13.3215 10.7228 13.328 10.559C13.3312 10.4369 13.3344 10.3052 13.3344 10.1606C13.3376 10.1092 13.3376 10.0546 13.3376 10C13.3376 9.79442 13.3344 9.6081 13.3279 9.44106ZM12.4702 10.1606C12.4702 10.2955 12.467 10.4112 12.4606 10.5108C12.4542 10.6489 12.4414 10.7581 12.4253 10.8449C12.4092 10.9316 12.3867 11.0023 12.3611 11.0569C12.3322 11.1115 12.3 11.1629 12.2583 11.2047C12.194 11.2754 12.1169 11.3332 12.0237 11.375C11.9306 11.4199 11.8245 11.4424 11.7057 11.4424C11.5836 11.4424 11.4777 11.4199 11.3845 11.375C11.2913 11.3332 11.211 11.2754 11.1468 11.2047C11.105 11.1629 11.0697 11.1115 11.044 11.0569C11.0151 11.0023 10.9958 10.9316 10.9765 10.8449C10.9604 10.7582 10.9508 10.649 10.9444 10.5108C10.9411 10.4112 10.9379 10.2956 10.9379 10.1606C10.9347 10.1092 10.9347 10.0546 10.9347 10C10.9347 9.79442 10.9379 9.62415 10.9444 9.48923C10.9508 9.3511 10.9604 9.24188 10.9765 9.15196C10.9958 9.062 11.0151 8.99134 11.044 8.93673C11.0697 8.88216 11.105 8.83075 11.1468 8.78896C11.211 8.71829 11.2913 8.66368 11.3845 8.62192C11.4776 8.58017 11.5836 8.55771 11.7057 8.55771C11.8246 8.55771 11.9306 8.58017 12.0237 8.62192C12.1169 8.66368 12.194 8.71829 12.2583 8.78896C12.3 8.83071 12.3321 8.88212 12.3611 8.93673C12.3868 8.99134 12.4092 9.062 12.4253 9.15196C12.4414 9.24188 12.4542 9.35114 12.4606 9.48923C12.4702 9.62415 12.4735 9.79442 12.4735 10C12.4735 10.0546 12.4735 10.1092 12.4702 10.1606Z'
  //     );
  //     path5.setAttribute('fill', 'white');

  //     const path6 = document.createElementNS(
  //       'http://www.w3.org/2000/svg',
  //       'path'
  //     );
  //     path6.setAttribute(
  //       'd',
  //       'M17.292 8.67006C17.2277 8.50623 17.1313 8.36166 17.0061 8.23963C16.884 8.11436 16.7298 8.01795 16.5467 7.94729C16.3668 7.87658 16.1612 7.84131 15.9331 7.84131H14.2209V12.1587H15.0818V10.5332H15.9331C16.1612 10.5332 16.3668 10.4979 16.5467 10.4272C16.7298 10.3565 16.884 10.2602 17.0061 10.1349C17.1313 10.0128 17.2277 9.86826 17.292 9.70443C17.3402 9.59201 17.3691 9.47314 17.3819 9.34787C17.3883 9.2965 17.3915 9.24186 17.3915 9.18725C17.3916 9.00732 17.3594 8.83389 17.292 8.67006ZM16.5114 9.34787C16.4889 9.45389 16.4343 9.54381 16.3572 9.61451C16.2447 9.72369 16.0874 9.77514 15.8882 9.77514H15.0819V8.59299H15.8882C16.0874 8.59299 16.2447 8.6476 16.3572 8.75682C16.4728 8.86604 16.5307 9.01057 16.5307 9.18725C16.5306 9.24506 16.5242 9.29967 16.5114 9.34787Z'
  //     );
  //     path6.setAttribute('fill', 'white');

  //     // Append paths to the group element
  //     groupElement.appendChild(path1);
  //     groupElement.appendChild(path2);
  //     groupElement.appendChild(path3);
  //     groupElement.appendChild(path4);
  //     groupElement.appendChild(path5);
  //     groupElement.appendChild(path6);

  //     // Append the group element to the SVG element
  //     unsafeSvgElement.appendChild(groupElement);

  //     // Finally, append the SVG element to the DOM
  //     document.body.appendChild(unsafeSvgElement);

  //     // Insert the SVG element after the h3 element
  //     h3Element.insertAdjacentElement('afterend', unsafeSvgElement);
  //     */
  //     // Insert the new text node after the h3 element
  //     h3Element.insertAdjacentText('afterend', 'CLICK ME :)');
  //   }
  // });

  // const scrapedLinks = finalFilteredAnchorTags.map((anchorTag) =>
  //   anchorTag.getAttribute('href')
  // );

  // console.log('ANCHOR TAGS: ', finalFilteredAnchorTags.length);
  // console.log('SCRAPED LINKS: ', scrapedLinks.length);
  // console.log(scrapedLinks);
})();
