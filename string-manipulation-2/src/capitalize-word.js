/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  } else {
    var newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return newWord;
  }
}

// define a function named capitalizeWord with one parameter, word
// use an if condition to return 'JavaScript' if the word is any form of JavaScript
// else, capitalize the first letter of the word and concatenate it woth the lowercase rest of the word
