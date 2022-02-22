var num1 = 10;
var num2 = 54;
var num3 = 6;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximum value:', maximumValue);

var heroes = ['Thor', 'Spider Man', 'Shang-Chi', 'Doctor Strange'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('random index value:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

var library = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins'
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green'
  }
];

var lastBook = library.pop();
console.log('last book:', lastBook);

var firstBook = library.shift();
console.log('first book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Charlie McCanna';
var firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('say my name:', sayMyName);
