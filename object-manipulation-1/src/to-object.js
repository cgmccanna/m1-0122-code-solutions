/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}

// define a new function named toObject with one parameter, keyValuePair
// assign an empty object to variable newObject
// assign the keyValuePair at 1 to the new property of keyValuePair at 0
// return newObject
