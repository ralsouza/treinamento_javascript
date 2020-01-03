/*
	Objeto String.

	.lenth(): Conta a quantidade de caractéres. 
*/

// Transformando em wrapper object
console.log( 'rafael'.length );

var raf = new String('Rafael');

console.log( raf );

console.log( raf.length );

/*
	.chartAt( index )

	Qual é o carácter no indice passado.
*/

console.log( 'rafael'.charAt(0) );

// Com notação de array, strings são array-like
console.log( 'rafael'[2] );

/*
	.concat( str1, str2, ... , strN )

	Concatena strings e não altera a string principal.
*/

console.log( 'Rafael'.concat( ' Lima', ' de', ' Souza' ) );

/*
	.indexOf( string [,start] )

	Retorna o indice de determinado array e passar um
	indice inicial opcional. Retorna -1 se não existir 
	a string solicitada.
*/

var raf = 'Rafael';

console.log( raf.indexOf('f') );

console.log( raf.indexOf('z') );

// Buscar por um trecho, retorna o indice de onde o trecho inicia
console.log( raf.indexOf('el') );

/*
	.lastIndexOf( string, [,start])

	Mesma função de .indexOf, mas de trás para frente
*/

/*
	.replace( string, newString)

	Faz substituições de strings, criando uma nova string e
	não altera a string original. A substituição é na primeira
	incidência da string.
*/

console.log( raf.replace('a','o') );

/*
	.slice( start, [,end] )

	Fatia a string conforme indicado nos indices, a string
	original não é modificada.
*/

console.log( raf.slice(2,4) );

/*
	.split( [separator], [,limit])

	Divide a string, transforma em um array e não altera
	a string original.
*/

// Dividir pelo a
console.log( raf.split('a') );

/*
	O objeto array tem um método que pode unir as strings.

	array.join()

*/

var arrRaf = ['raf', 'a', 'el'];

console.log( arrRaf.join('|') );

// Usar as funções juntas
// .split() retorna um array e join é um método de arrays
console.log( raf.split('a').join('u') );

/*
	.substring( start, [,end] )

	Faz basicamente o mesmo que .slice(), pegando parte
	da string.
*/

console.log( raf.substring(2,4) );

/*
	.toLowerCase()

	Transforma todas as  strings para caixa baixa.
*/

var name = 'Rafael';

console.log( name.toLowerCase() );

/*
	.toUpperCase()

	Transforma todas as strings para caixa alta.
*/

console.log( name.toUpperCase() );

/*
	Exercício
	
	Transformar a primeira letra em caixa alta
*/


var name = 'rafael';

var newName = name.charAt(0).toUpperCase() + name.slice(1);

console.log ( newName );
