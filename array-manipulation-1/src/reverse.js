/* exported reverse */
function reverse(array) {
  var reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

// define a function named reverse
// assign an empty array to a variable named reverseArray
// use a for loop to go through each element of the array, starting at the last element and decrementing
// push each element, starting from the end, into reverseArray
// return reverseArray
