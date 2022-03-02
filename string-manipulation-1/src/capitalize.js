/* exported capitalize */
function capitalize(word) {
  var newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return newWord;
}

// define a function named capitalize with one paramater, word
// define a new variable named newWord
// use charAt method to access the first letter of the word
// use toUpperCase to capitalize the first letter
// concatenate the capitalized first letter with the rest of the word
// by slicing it at the 2nd character and using the toLowerCase function to make it lowercase
