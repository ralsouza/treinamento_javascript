
// While
console.log('====== WHILE ======');

var counterWhile = 1;

while( counterWhile < 10 ) {

	console.log( counterWhile++ );
}

// Do/While
console.log('====== DO/WHILE ======');

var counterDo = 1;

do {
	
	console.log( counterDo++ );
} while( counterDo < 10 );

// For
console.log('====== FOR ======');

for( var i = 0; i < 10; i++ ) {

	console.log( i );
}

/**
	For in - Usado para percorrer as propriedades de um objeto,
			 esta instrução é mais lenta que o for, usar com cautela
**/
console.log('====== FOR IN ======');

// Objeto carro
var car = {
	brand: 'VW',
	model: 'Gol',
	year: 2013
};

// Teste de impressão do objeto
console.log( car );

console.log( '\nImprimir as propriedades do objeto car:' );

for( var prop in car ) {

	console.log( prop );
}

// Testar se uma propriedade existe em um objeto, retornando true ou false
console.log( '\nbrand in car? ', 'brand' in car );

console.log( 'door in car?', 'doors' in car );

// Exibir o valor da propriedade
console.log( '\nExibir os valores das propriedades do objeto car:' );
for( var prop in car ) {

	console.log( car[prop] );
}
