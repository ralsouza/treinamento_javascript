/*
	Testando tipos de objetos

	Operador unário: typeof <operando>
*/

console.log( typeof undefined );

console.log( typeof function() {} );

console.log( typeof true );

console.log( typeof 10 );

console.log( typeof NaN );

console.log( typeof 'Rafael' );

// Para todas as outras será um objeto

console.log( typeof {} );

console.log( typeof [] );

console.log( typeof null ); 

/*
	O retorno do null como objeto é um erro na implementação
	do JavaScript. Recomanda-se não usar typeof testando null e objetos
*/

function subtract(num1, num2) {

	if (typeof num1 === 'number' && typeof num2 === 'number') {

		return num1 - num2;
	}

	return 'Entre com dois números';
}

console.log(subtract(4,3))

console.log(subtract(4,'M'))

// Testando o null
function testeNull(num1, num2) {

	if(num1 === null) {
		return 'Não entre com valores nulos';
	}

	return num1 - num2;
}

console.log( testeNull(9, 3));
console.log( testeNull(null, 3));
