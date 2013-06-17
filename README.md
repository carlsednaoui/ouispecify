# A Simple CSS Specificity Calculator Built in JS
Simple call specify() with your css selectors.

## Example
    specify('h1#title');                // returns 1.0.1
    specify('h1:first-child[checked]'); // returns 0.2.1
    specity('#s12:not(FOO)');           // returns 1.0.1
    specify('li.red.level');            // returns 0.2.1


## Resources
- [W3](http://www.w3.org/TR/selectors/)
- [CSS Tricks](http://css-tricks.com/specifics-on-css-specificity/)
- [Smashing Magazine](http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)
