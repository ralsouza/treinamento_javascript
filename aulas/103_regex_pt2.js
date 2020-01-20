/*
	REGEX with .replace()
*/

var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.';

// Change all 'de' matches in the text
console.log( text.replace(/de/g, '*DE') );

/*
	Using capture grouping to replace the first capture
*/

console.log( text.replace(/(de)/g, '--$1--') );

/*
	Capturing two matches and replace by the first capture twice
*/
console.log( text.replace(/(d)(e)/g, '$1$1') );

// Replace all captures of 'de' by '--e'
console.log( text.replace(/(d)(e)/g, '--$2') );

// Getting all captures together unsing &
console.log( text.replace(/(d)(e)/g, '--$&') );

// Using regex, with .replace() and function to data munging
console.log( text.replace(/(d)(e)/g, function(totalCapture, d, e) {
	return ( d + e ).toUpperCase();
} ) )

// Using REGEX to resolve the last challenge
console.log( 'Rafael'.replace(/(\w)(\w)/g, function(totalCapture, letter1, letter2) {
	return letter1.toUpperCase() + letter2.toLowerCase();
}));
