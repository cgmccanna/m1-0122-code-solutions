/* exported omit */
function omit(source, keys) {
  var newObject = {};
  var check = 0;
  for (var key in source) {
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i] && source !== {}) {
        check++;
      }
    }
    if (check === 0) {
      newObject[(key)] = (source[(key)]);
    }
    check = 0;
  }
  return newObject;
}
