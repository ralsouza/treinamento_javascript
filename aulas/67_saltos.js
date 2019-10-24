// Return
function myfunc() {

	var number = 10;

	if( number === 10 ) {

		return true;
	}

	var number2 = 5;
	var name = 'Rafael Lima';

	return name + ' ' + number2;
}

console.log( myfunc() );

// Break - Sair de uma instrução
// Usando Switch
var number = 10;

switch( number ) {

	case 1:
		console.log( '1' );
		break;
	case 2:
		console.log( '2' );
		break;
	default:
		console.log( 'default' );
}

console.log( 'fim do switch' );

// Usando break no for

console.log( '\n==== FOR BREAK ====' );

for( var i = 0; i < 10; i++ ) {

	if( i === 5 ) {
		break;
	}

	console.log( i );
}

console.log( '==== FIM FOR ====' );

// Continue - Continua para a próxima instrução válida
var arr = [1,2,3,4,5,6,7,8,9,10];

console.log( '==== FOR CONTINUE ====' );

for( var i = 0; i < arr.length; i++ ) {

	/*
		Quando i for igual a 5, continuar o loop, sem executar 
		as operações seguintes
	*/
	if( i === 5 ) {
		continue;
	}

	console.log( i );
}

console.log( '==== FIM DO FOR ====' );
