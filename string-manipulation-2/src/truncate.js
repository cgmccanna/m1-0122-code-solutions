/* exported truncate */
function truncate(length, string) {
  var newString = string.slice(0, length);
  var truncated = newString + '...';
  return truncated;
}
