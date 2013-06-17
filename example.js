document.getElementById('specify').onsubmit = function() {
  cssSelector = document.getElementById('css-selectors').value;
  document.getElementById('result').innerHTML = specify(cssSelector);
  return false;
};