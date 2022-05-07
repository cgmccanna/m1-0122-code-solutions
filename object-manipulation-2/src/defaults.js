/* exported defaults */
function defaults(target, source) {
  var check = 0;
  for (var key in source) {
    for (var cash in target) {
      if (key === cash) {
        check = 1;
      }
    } if (check === 0) {
      target[(key)] = source[(key)];
    } check = 0;
  }
}
