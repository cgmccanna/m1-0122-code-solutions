/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key === keys[i] && source[key] !== undefined) {
        newObject[(keys[i])] = source[key];
      }
    }
  }
  return newObject;
}
