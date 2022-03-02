/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

// define a function named reverseWord with one parameter, word
// assign an empty string to the variable newWord
// use a for loop to start at the end of the string and decreement throug the string
// add and assign the result of the word[i] to the newWord variable
// return the newWord
