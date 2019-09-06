// OPERADOR VÍRGULA
function myFunc() {
	/* 	
		Como as variáveis abaixo estão separadas
	 	pelos operadores vírgulas, as variáveis
	 	são globais, pois estendem o comando var.

	 	Se a primeira vígula for substituída por ;
	 	as variáveis b e c serão globais, pois perderão
	 	o vínculo do operador vírgula.

	 	Mas esta opção não é visualmente prática, então
	 	não é recomendado, melhor declarar cada variável
	 	por vez.
	*/

	var a = 1, b = 2, c = 3; 
	
	return [a,b,c];

}

console.log( myFunc() );

// OPERADOR VÍRGULA NO RETORNO
function myFunc2() {
	
	var x = 0;

	/* 
		Incremento do x, e o retorno do x
		após o operador vírgula.

		Mas não é comum ver isso.
	*/
	return ( x += 1, x)
}

console.log( myFunc2() );

// Seria a mesma coisa que abaixo
function myFunc3() {

	var x = 0;

	return ++x;
}

console.log( myFunc3() );


// ESTRUTURA CONDICIONAL - SWITCH
function myFunc( x ) {

	switch( x ) {

		case 1:
			console.log( 'x é 1' );
			break;

		case 2:
			console.log( 'x é 2' );
			break;

		default:
			console.log( 'x não é 1 nem 2' );

	}
}

console.log( myFunc() );

console.log( myFunc(1) );
