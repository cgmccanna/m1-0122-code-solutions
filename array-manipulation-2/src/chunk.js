/* exported chunk */
function chunk(array, size) {
  if (array.length === 0) {
    return [];
  } else {
    var newArray = [];
    for (var i = 0; i < array.length; i += size) {
      var newChunk = array.slice(i, i + size);
      newArray.push(newChunk);
    }
  }
  return newArray;
}

// define a new function named chunk with 2 parameters, array and size
// if the array length is 0, return an empty array
// use an else condition and assign an empty array to a new variable, newArray
// use a for loop to loop through the array, increasing the index by 'size' each time
// use the slice method on the array, starting at the i and ending at i + the size of the chunk
// push the newChunk into the newArray
// return newArray
