/*
	Lança um SyntaxError: Delete of an unqualified identifier in strict mode, 
	quando em 'use strict', quando não puder deletar.
*/

(function() {

	'use strict';

	var myVar = 2;

	var obj = {
		prop1: 'prop1',
		prop2: 'prop2',
		prop3: 'prop3'
	};

	// Variáveis não podem ser deletadas
	// console.log( delete myVar, myVar );

	// Ainda é possível deletar itens dentro de um objeto
	// console.log( delete obj.prop2, obj );

	// Mas não é possível deletar um objeto inteiro
	// console.log( delete obj );

/*
	Outro uso é que as propriedades devem possuir nomes
	diferentes.
*/
	
	var obj2 = {
		prop1: 'prop1',
		prop1: 'prop2'
	};

	console.log( obj2 );

	/*
		Por alguma razão não é lançado um erro, mas na 
		documentação existe esta diretiva.
	*/

	/*
		Nomes de argumentos duplicados também lançam um erro.

		SyntaxError: Duplicate parameter name not allowed in this context.
	*/

	function myFunc( a, b, c ) {

		return a + b;
	}

	console.log( myFunc( 1, 2, 3 ) );

})();
