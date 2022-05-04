/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var lowerString = string.toLowerCase();
  for (var i = 0; i < lowerString.length; i++) {
    if (lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' || lowerString[i] === 'o' || lowerString[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
