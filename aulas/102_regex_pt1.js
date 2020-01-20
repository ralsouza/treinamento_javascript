/*
	REGEX

	Primitive Type: //
	Object Type: RegExp()

*/

/*
	Literals
	We can use literals, letters from a to z in upper or lower case and numbers.
*/

var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.';

// Get the first occurrece of m  
console.log( text.match(/m/) );

/*
	Flags

	g: global
	i: ignore case
*/

// Get all letters m in text, with g flag
console.log( text.match(/m/g) );

// Get all letters m ignoring case, with i flag
console.log( text.match(/m/gi) );

/*
	Terms

	\w: alphanumeric characters and _

	\d: numbers (digits)
*/

// Get all letters from the texto
console.log( text.match(/\w/g));

// Get the word 1875
console.log( text.match(/1875/));

// If anyone expression matches, a null value will return
console.log( text.match(/Rafael/));

// Get the first occurrence of a digit
console.log( text.match(/\d/));

// Get all numbers
console.log( text.match(/\d/g) );

// Get the first occurrence a number that matches with two digits, a number followed by another number
console.log( text.match(/\d\d/) );

// Now get all numbers followed by another number
console.log( text.match(/\d\d/g) );

/*
	Character Classes (Lists)

	When we want to match some specific letters, they are represented by []
*/

// Get all matches with 'da' or 'de' separately
console.log( text.match(/da|de/g) );

// Or using with Character Classes
console.log( text.match(/[1234]/g) )

/*
	Character Grouping, they are represented by ()
*/

// Get 1875 or 1817
console.log( text.match(/1875|1817/g) );

// Getting character from 0 to 9
console.log( text.match(/[0-9]/g) );

// Getting all characters from a to z in lowercase
console.log( text.match(/[a-z]/g) );

// Or in uppercase
console.log( text.match(/[A-Z]/g) );

// Now, get all characters together
// Spaces and punctuation will not be returned
console.log( text.match(/[a-zA-z0-9]/g) );
