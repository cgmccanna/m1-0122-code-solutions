/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a new function named compact with a single paramter, an array
// assign an empty array to a new variable, newArray
// use a for loop to go through each element in the array
// use an if condition to which evaluates if the element is truth or falsy
// push the element into newArray if truthy
// return the newArray
