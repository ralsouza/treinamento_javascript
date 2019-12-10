/*
	.indexOf( param1, param2 )

	Retorna o indice onde encontra-se o valor passado na função.

	param1: Termo da busca
	param2 (opcional): Onde iniciar a busca
*/

var arr = [ 1, 2, 3, 4, 5 ];

// Retornar o indice onde encontra-se o valor 3
console.log( arr.indexOf(3) );

// Se o valor não existir, -1 é retornando indicando que o valor não existe no array
console.log( arr.indexOf(6) );

// Checagens com strings
var arrStr = [ 'R', 'a', 'f', 'a', 'e', 'l' ];


// Checar se existe a string h
console.log( arrStr.indexOf('h') );

// Checar se existe a string R
console.log( arrStr.indexOf('f') );

// Iniciar a busca apartir do elemento 2
console.log( arrStr.indexOf('a', 2) );


/* 
	Fazer alguma coisa apartir de uma condição

	Checar se o indexOf() é maior que -1 para saber se determinado valor existe
*/
console.log( arrStr.indexOf('a', 2) > -1 ); // Foi encontrado no array

/*
	.lastIndexOf( param1, param2 )
	
	param1: Termo da busca
	param2 (opcional): Onde iniciar a busca

	Faz o mesmo que o indexOf(), porém busca do final para o início
*/

console.log( arrStr.lastIndexOf( 'a' ) );

/*
	.isArray()

	Checar se o objeto é um array, pois typeOf() retorna o array como sendo tipo objeto
*/

// Checar se o objeto é um array
console.log( Array.isArray( {} ) );

// Passando um array
console.log( Array.isArray( [] ) );
