/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var first = string[firstIndex];
  var second = string[secondIndex];
  var part1 = string.substring(0, firstIndex) + second + string.substring(firstIndex + 1);
  var part2 = part1.substring(0, secondIndex) + first + part1.substring(secondIndex + 1);
  return part2;
}
