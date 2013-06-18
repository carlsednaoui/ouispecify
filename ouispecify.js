;(function(exports) {
    exports.specify = function(text) {
      var firstPosition   = [],
          secondPosition  = [],
          thirdPosition   = [],
          parsedCSS;

      parsedCSS = parseCSS(text);

      for (var i=0; i < parsedCSS.length; i++) {
        var currentEl = parsedCSS[i];

        if (currentEl.charAt(0) === '#') {
          firstPosition.push(currentEl);
        } else if (pseudoClasses.indexOf(currentEl) !== -1 ||
                   currentEl.charAt(0) === '[' ||
                   currentEl.charAt(0) === '.') {
          secondPosition.push(currentEl);
        } else {
          thirdPosition.push(currentEl);
        }
      }

      return firstPosition.length + '.' + secondPosition.length + '.' + thirdPosition.length;
    };

  function parseCSS(text) {
    var cssArray = text.split(' ');
    var parsedCSS = [];

    for (var i=0; i < cssArray.length; i++) {

      // Remove the * selector
      var currentEl = cssArray[i].replace('*', '');

      // If currentEl has specific selectors push those to parsedCSS.
      while(findNextPosition(currentEl)) {
        var nextPosition = findNextPosition(currentEl);
        parsedCSS.push(currentEl.substr(0, nextPosition));
        currentEl = currentEl.substr(nextPosition);
      }

      // Push the remaining (last) selector to parsedCSS.
      parsedCSS.push(currentEl);
    }

    // Remove these charaters
    var charsToRemove = ['+', '~', '>', '<', ':not', ':', ''];
    parsedCSS = parsedCSS.filter(function(el) {
      return charsToRemove.indexOf(el) === -1;
    });

    return parsedCSS;
  }

  // Used to sort numbers in the findNextPosition fn
  function sortNumber(a,b) {
      return a - b;
  }

  function findNextPosition(text) {
    var delimiters  = ['.', '#', '[', ':', '+', '('],
        positions   = [],
        textMinusOne;

    // Remove the 1st char. This makes sure that 0 is not returned.
    textMinusOne = text.substr(1);

    delimiters.map(function(delimeter) {
      // Push the first instance for each of the delimiters.
      // Add one back to textMinusOne.
      textMinusOne.indexOf(delimeter) !== -1 ? positions.push(textMinusOne.indexOf(delimeter) + 1) : '';
    });

    // return the smallest one
    var smallestEl = positions.sort(sortNumber).shift();
    return smallestEl === undefined ? false : smallestEl;
  }

  var pseudoClasses = [':link',
                       ':visited',
                       ':active',
                       ':hover',
                       ':focus',
                       ':first-child',
                       ':nth-child',
                       ':nth-last-child',
                       ':nth-of-type',
                       ':first-of-type',
                       ':last-of-type',
                       ':empty',
                       ':target',
                       ':checked',
                       ':enabled',
                       ':disabled'];
})(this);

// Maybe I'll use this one day. Maybe.
// var pseudoElements = [':after',
//                       ':before',
//                       '::first-letter',
//                       '::first-line',
//                       '::selection',
//                       ':first-letter',
//                       ':first-line',
//                       ':selection'];