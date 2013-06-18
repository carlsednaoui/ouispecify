document.getElementById('specify').onsubmit = function() {
  updateSpecificity();
  return false;
};

window.onkeyup = function() {
  updateSpecificity();
};

function updateSpecificity() {
  cssSelector = document.getElementById('css-selectors').value;
  document.getElementById('result').innerHTML = specify(cssSelector);
}