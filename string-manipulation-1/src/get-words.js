/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    var newArray = string.split(' ');
    return newArray;
  }
}

// define a function named getWords with one parameter, a string
// use an if condition to return an empty array if the string is empty
// else, use the split method on the string with the ' ' seperator and assign the result to the variable newArray
// return newArray
