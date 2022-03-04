/* exported dropRight */
function dropRight(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    var newArray = [];
    for (var i = 0; i <= array.length - (count + 1); i++) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
