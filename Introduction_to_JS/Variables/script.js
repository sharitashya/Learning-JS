//variables
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

job = 'Teacher';
console.log(job);



/*Variable mutation and type coercion*/
//type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight'; //JS dynamic typing
job = 'driver';



/* ******************************Operators in JS******************************** */
// Math 
now = 24;
console.log(now - 4);

// Logical
then = 35;
var greater = now < then;

// typeof
console.log(typeof now);

// ------------------------ Study operator precedence on mozilla ------------------------
// Implementing Ternary operator

var name = 'John';
var age = 16;

age >= 18 ? console.log(name + ' drinks beer.') : console.log(name + ' drinks juice.');







