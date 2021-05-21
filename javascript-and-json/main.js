var books = [
  {
    isbn: '1421527731',
    title: 'Brave Story',
    author: 'Miyuki Miayabe'
  },
  {
    isbn: '0061718955',
    title: 'Medium Raw',
    author: 'Anthony Bourbain'
  },
  {
    isbn: '0062564331',
    title: 'Anansi Boys',
    author: 'Neil Gainman'
  }
];

console.log('array of books', books, typeof books);

var JSONbooks = JSON.stringify(books);

console.log('JSON books', JSONbooks, typeof JSONbooks);

var student = '{"ID":"031941150", "Name":"Billy Baston"}';
console.log('student', student, typeof student);

var JSONstudent = JSON.parse(student);
console.log('JSONstudent', JSONstudent, typeof JSONstudent);
