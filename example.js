window.onkeyup = function() {
  specificity = getCSSSpecificity();
  updateSpecificityNumber(specificity);
  updateSpecificityDetails(specificity);
};

function getCSSSpecificity() {
  cssSelector = document.getElementById('css-selectors').value;
  return specify(cssSelector);
}

function updateSpecificityNumber(specificityObject) {
   document.getElementById('id-specificity').innerHTML = specificityObject.specificity[0];
   document.getElementById('class-specificity').innerHTML = specificityObject.specificity[1];
   document.getElementById('type-specificity').innerHTML = specificityObject.specificity[2];
}

function updateSpecificityDetails(specificityObject) {
  // add spaces
  document.getElementById('id-specificity-details').innerHTML = specificityObject.details[0].map(function(el) {return " " + el; });
  document.getElementById('class-specificity-details').innerHTML = specificityObject.details[1].map(function(el) {return " " + el; } );
  document.getElementById('type-specificity-details').innerHTML = specificityObject.details[2].map(function(el) {return " " + el; });
}