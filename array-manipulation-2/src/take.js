/* exported take */
function take(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    var countValues = [];
    for (var i = 0; i <= count - 1; i++) {
      countValues.push(array[i]);
    }
    return countValues;
  }
}

// define a new function named take with 2 parameters, array and count
// use an if condition to check if the array length is 0 (empty array)
// return [] if the array is empty
// else, assign a new empty array to the variable countValues
// use an if statement to iterate through the array for the number of 'count'
// push the value of the array[i] into the countValues array
// return countValues
