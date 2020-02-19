/*
	Making regular expressions with constructor RegExp()
*/

console.log( '# Pass RegExp as string to constructor');

var regex = new RegExp( 'rafa' );

console.log( regex );

console.log( 'rafael'.match( regex ) );

console.log( '# Getting only numbers from name variable' );
var name = 'rafa123el';

console.log( name );

// Is necessary to scape with double slash
var regex = RegExp( '\\d' );

console.log( 'Regex with scaping:' );
console.log( regex );

/*
	.text( regexp )

	Return true if match exists.
*/

var regex = RegExp( '\\d' );

console.log( regex.test( name ) );

/*
	.exec(string)

	Go through a string with the match, incrementing the counter until it returns null

*/
console.log( '# .exec(string) ');

var regex = /\d/g;

var name = 'rafa123el';

console.log( regex.exec( name ) );

/*
	Making a tab in strings
*/

console.log( 'Two tabs:\t\t', 'here');

/*
	Escaping simple or double quotes 
*/

console.log( 'Julio\'s bar');

console.log( "Julio\"s bar");
