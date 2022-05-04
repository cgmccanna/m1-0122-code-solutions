/* exported capitalizeWords */
function capitalizeWords(string) {
  var newString = '';
  var stringWords = string.toLowerCase().split(' ');
  for (var i = 0; i < stringWords.length; i++) {
    stringWords[i] = stringWords[i].charAt(0).toUpperCase() + stringWords[i].substring(1);
  }
  newString = stringWords.join(' ');
  return newString;
}
