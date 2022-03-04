/* exported includes */
function includes(array, value) {
  if (array.length === 0) {
    return false;
  } else if (array.indexOf(value) >= 0) {
    return true;
  } else if (array.indexOf(value) === -1) {
    return false;
  }
}

// define a new function named includes with 2 parameters, array and value
// use an if condition to return false if the length of the array is 0
// use an else if condition to return true if the value can be found in the array
// by using indexOf to see if the value is at an index
// return false if the index is -1, the value was not found in the array
