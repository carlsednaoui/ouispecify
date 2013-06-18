window.onkeyup = function() {
  cssSelector = document.getElementById('css-selectors').value;
  document.getElementById('result').innerHTML = specify(cssSelector);
};
