/*
	.match()

	Returns an array of matches or null if no match is found
*/

console.log( 'rafael'.match(/rafa/) );

console.log( 'rafael'.match(/a/g) );

/*
	.replace( regexp, string )

	Replace of matches by a string.
*/

/*
	.split( regexp )

	Using REGEX to make spliting.
*/

// Split the string where there is no digit
console.log( '111.222.333-44'.split( /\D/ ) );

/*
	.search( regexp )

	Searchs in a string by regex, returning the index of position 
	for first match. Like .indexOf()
*/

console.log( '111.222.333-44'.search( /\./ ) );
