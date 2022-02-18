function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetingResult = greet('Beavis');

console.log('greetingResult:', greetingResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);

console.log('areaResult:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var personFirstName = getFirstName({ firstName: 'John', lastName: 'Baker' });

console.log('personFirstName:', personFirstName);

function getLastElemet(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElementResult = getLastElemet(['propane', 'and', 'propane', 'accessories']);

console.log('lastElementResult:', lastElementResult);
