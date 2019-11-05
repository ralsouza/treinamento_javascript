/*
	.join()

	Juntar itens de um array
*/
var arr = ['arroz','feijao','lasanha'];

// Juntar em uma string os itens do array,
// com separador de vírgula, por padrão
var arrJoin = arr.join();

console.log(arrJoin);

// Usar outro tipo de separador separador em branco
console.log( arr.join(' ') );

// espaço, pipe e espaço
console.log( arr.join(' | ') );

// Criando frases
console.log( 'Meu almoço será ', arr.join(', ') );

/*
	.reverse()

	Inverter a ordem dos itens do array
	ESTE MÉTODO MODIFICA O ARRAY
*/
console.log( arr );

console.log( arr.reverse() );

// O array é modificado
console.log( arr );

/*
	.sort()

	Ordenar os itens do array
	ESTE MÉTODO MODIFICA O ARRAY
*/
var arr2 = ['omega', 'alpha', 'zeta', 'beta'];

console.log( arr2.sort() );

console.log( arr2 );
