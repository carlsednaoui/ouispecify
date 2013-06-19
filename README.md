# A Simple CSS Specificity Calculator
Call specify() with your css selectors, you'll receive an object with both the specificity number & the details.

## Example
    specify('h1#title');                
    // returns {specificity: [1,0,1],
                details: [['#title'],[],['h1']]};

## Project Page & Live example
- Here is the [official project page](http://carlsednaoui.github.io/ouispecify/)
- [Specificity Calculator: a live example](http://carlsednaoui.github.io/ouispecify/example.html)

## Resources
- [W3](http://www.w3.org/TR/selectors/)
- [CSS Tricks](http://css-tricks.com/specifics-on-css-specificity/)
- [Smashing Magazine](http://coding.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)

## Tests
Tests use the Jasmine framework. To play around with the tests you'll need to start a web server:
    
    python -m SimpleHTTPServer

And then navigate to [http://localhost:8000/test](http://localhost:8000/test).

## Tree
    .
    ├── README.md
    ├── ouispecify.js
    └── test
        ├── index.html
        ├── lib
        │   └── jasmine-1.3.1
        │       ├── MIT.LICENSE
        │       ├── jasmine-html.js
        │       ├── jasmine.css
        │       └── jasmine.js
        └── spec
            └── ouispecify.spec.js

## Thanks
Special thanks to [Lauren](https://github.com/lauren) and [Tom](https://github.com/tbuchok).

## License
[MIT](http://opensource.org/licenses/MIT)
