/* exported ransomCase */
function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      newWord = (string.charAt(i).toLowerCase());
    } else if (i % 2 === 0) {
      newWord += (string.charAt(i).toLowerCase());
    } else if (i % 2 !== 0) {
      newWord += (string.charAt(i).toUpperCase());
    }
  }
  return newWord;
}
