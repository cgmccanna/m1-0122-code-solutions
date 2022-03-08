/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    words[i] += suffix;
    newWords.push(words[i]);
  }
  return newWords;
}
