/* exported tail */
function tail(array) {
  var arrayTail = [];
  for (var i = 0; i < array.length - 1; i++) {
    arrayTail.push(array[i + 1]);
  }
  return arrayTail;
}

// define a function named tail with a single parameter 'array'
// define a new variable with an empty array
// use a for loop to
