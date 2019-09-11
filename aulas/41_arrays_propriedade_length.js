// Arrays - Propriedade Length: Conta a quantidade de elementos dentro de um array

var arr = [ `Rafael`, null, true, { bola: `azul` }, function() {} ];

// Contar a quantidade de itens dentro do array arr
console.log( arr.length );

// Repetição while com limite estático
var num = 0;

while( num < 10 ) {

	console.log( num++ );

}

// Iterar um array de forma dinâmica
var qtd = arr.length;

while( qtd > 0 ) {

	console.log( arr[ --qtd ] );

}

// Obter o valor bola do objeto, pelo índice
qtd = arr.length;

while( qtd > 0 ) {
	// Retornar todos os itens do objeto
	console.log( arr[ --qtd ] );

	// Quando for um objeto, retornar o valor da propriedade
	if( qtd === 3 ) {
		console.log( arr[ qtd ].bola );
	}
}
