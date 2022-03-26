var books = [
  {
    isbn: '2019733',
    author: 'J.R.R. Tolkien',
    title: 'The Hobbit'
  },
  {
    isbn: '4738292',
    author: 'John Green',
    title: 'The Fault in Our Stars'
  },
  {
    isbn: '4628249',
    author: 'Stehanie Meyers',
    title: 'Twilight'
  }
];

console.log('books array:', books);
console.log('type of books:', typeof books);

var booksJSON = JSON.stringify(books);

console.log('books JSON:', booksJSON);
console.log('type of booksJSON:', typeof booksJSON);

var newStudentJSON = '{"id":23,"name":"Edgar"}';

console.log('new student:', newStudentJSON);
console.log('type of student:', typeof newStudentJSON);

var studentParse = JSON.parse(newStudentJSON);
console.log('studentParse:', studentParse);
console.log('type of studentParse:', typeof studentParse);
