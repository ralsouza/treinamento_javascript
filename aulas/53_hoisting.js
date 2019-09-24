/*
	Algumas literaturas chamam o recurso de hoisting de
	içamento ou elevação.

	O JS identifica a definição da função após a invovação no return, 
	e internamente move a função para ser definida antes do return.

	Mas se a função for atribuida em uma variável, o hoisting não funcionará.
*/

// Isso funciona
function myFunction() {

	var num1 = 1;
	var num2 = 2;

	return sum();

	function sum() {

		return num1 + num2;
	}
}

console.log( myFunction() );

// Quando a função interna é atribuida em uma variável, 
// o hoisting não funciona

// function myFunc() {

// 	var num1 = 1;
// 	var num2 = 2;

// 	return sum();

// 	var sum = function sum() {
// 		return num1 + num2;
// 	};
// }

// console.log( myFunc() );

// Gera um erro, pois o JS entende que a função atribuída é undefined

// Outro exemplo

function myFunc() {

	console.log( `Antes de declarar ${num1}` );

	var num1 = 10;

	console.log( `Depois de declarar ${num1}` );
}

myFunc();
