/*
	Wrapper Objects

	Primitive values are not objects, objects has proprieties and methods.
*/

var name = 'Rafael';

console.log(name.length);

/*
	JavaScript has contructors that makes new objects

	var name = new String('Rafael');

	var age = new Number(36);

	var ninja = new Boolean(false);
*/

var name = new String('Rafael');

// When create a string with new String, the name will always be an object
console.log(name);

// Return value of name object
console.log(name.valueOf());
