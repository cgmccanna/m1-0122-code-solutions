/* exported isUpperCased */
function isUpperCased(word) {
  var capitalWord = word.toUpperCase();
  if (word === capitalWord) {
    return true;
  } else {
    return false;
  }
}
