var student = {
  firstName: 'Charlie',
  lastName: 'McCanna',
  age: 22
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'recruitment coordinator';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: '4Runner',
  year: '2020'
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Peep',
  type: 'bird'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
