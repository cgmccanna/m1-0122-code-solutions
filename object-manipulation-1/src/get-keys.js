/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}

// define a new function named getKeys with one parameter, object
// assign an empty array to a variable named key
// use a for..in loop to access each to iterate the properties of the object
// push the name of each key into the keys array
// return keys array
