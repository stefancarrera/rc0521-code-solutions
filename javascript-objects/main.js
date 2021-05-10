var student = {
  firstName: 'Stefan',
  lastName: 'Carrera',
  age: 35
};

student.fullName = student.firstName + ' ' + student.lastName;
console.log('value of student.fullName:', student.fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Edcuation Manager at a Non-proft';
console.log('value of livesInIrving:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

console.log('value of the object student:', student);

var vehicle = {
  make: 'Hyundai',
  model: 'Santa Fe',
  year: 2020
};

vehicle['color'] = 'Navy Blue';
vehicle['isConvertible'] = false;
console['log']('value of vehicle["color"]:', vehicle['color']);
console['log']('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle object:', vehicle);

var pet = {
  name: 'Noonie',
  type: 'Dog'
};
delete pet.name;
delete pet.type;

console.log('value of pet object:', pet);
