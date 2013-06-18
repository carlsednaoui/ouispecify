# A Simple CSS Specificity Calculator Built in JS
Simple call specify() with your css selectors. You'll receive an object with both the specificity number & the details.

## Example
    specify('h1#title');                
    // returns {specificity: [1,0,1],
                details: [['#title'],[],['h1']]};

## Live example - Specificity Calculator
[Here is a live example](http://carlsednaoui.github.io/ouispecify/example.html).

## Project page
Here is the [official project page](http://carlsednaoui.github.io/ouispecify/).

## Resources
- [W3](http://www.w3.org/TR/selectors/)
- [CSS Tricks](http://css-tricks.com/specifics-on-css-specificity/)
- [Smashing Magazine](http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)

## License
[MIT](http://opensource.org/licenses/MIT)