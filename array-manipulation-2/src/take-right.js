/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else if (array.length === 0) {
    return [];
  } else {
    var newValues = array.slice(-count);
  }
  return newValues;
}
