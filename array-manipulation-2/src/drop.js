/* exported drop */
function drop(array, count) {
  if (array.length === 0) {
    return [];
  } else {
    var dropValues = array.slice(count);
  }
  return dropValues;
}
