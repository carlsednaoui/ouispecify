;(function(exports) {
    exports.specify = function(text) {
      if (text === '') {return;}
      var firstPosition   = [],
          secondPosition  = [],
          thirdPosition   = [];

      parseCSS(text).forEach(function(currentEl) {
        if (/^#/.test(currentEl)) {
          firstPosition.push(currentEl);
        } else if (pseudoSelectorsRegEx.test(currentEl) || /^(\[|\.)/.test(currentEl)) {
          secondPosition.push(currentEl);
        } else {
          thirdPosition.push(currentEl);
        }
      });

      return {specificity: [firstPosition.length,
                            secondPosition.length,
                            thirdPosition.length],
              details: [firstPosition, secondPosition, thirdPosition]};
    };

  function parseCSS(text) {
    // excluders = ['+', '~', '>', '<', ':not'];
    var excluders = /\+|~|>|<|:not\(|/;

    // delimiters  = ['.', '#', '[', ':', '+', '(']
    // we're getting rid of extra spaces by not returning them
    // we're using a look ahead
    var matchers = /(\.|#|\[|\:|\:\:|\+|\()?[\w\]\=\-]+/g;

    return text.split(excluders).join('').match(matchers);
  }

  var PSEUDO_SELECTORS = [':link',
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

    var pseudoSelectorsRegEx = new RegExp('(' + PSEUDO_SELECTORS.map(function(p) {
      return '\\' + p;
    }).join('|') + ')');

})(this);
