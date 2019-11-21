/*
	forEach()

	Recebe um parâmetro, que é uma função e esta função recebida por parâmtro
	que fará a iteração para cada item do array.

	O forEach() além de mais elegante, é um pouco mais rápido que o
	for() convencional. E por ser um método é possível usar técnicas funcionais.
*/

var arr = [1,2,3,4,5,6,7];


// 
arr.forEach(function( item, index, array ) {

	console.log(item, index, array);
});

/* 
	Não é preciso usar todos os argumentos ao mesmo tempo
	
	Listar apenas os itens do array
*/

arr.forEach(function( item ) {

	console.log(item);
});

// Somar todos os itens do array
var sum = 0;

arr.forEach(function( item ) {

	sum += item;
});

console.log( sum );

/*
	every()

	É o predicado do array, aplica uma função onde seu retorno será 
	true ou false.

	É usado para testar os itens do array, por exemplo, checar se os itens são 
	divisíveis por 2
*/

// Retornar true se o item for menor que 5, senão retornar false
var every = arr.every(function( item ) {

	console.log( item );

	return item < 5;
});

console.log( every );

var every = arr.every(function( item ) {

	console.log( item );

	return item < 8;
});

console.log( every );

/*
	some()

	Análogo ao método every(), mas apenas para alguns elementos.
	Se pelo menos um item do array for true, true será retornado senão false.
*/

var some = arr.some( function( item ) {

	return item % 2 === 0;
} );

console.log( some );
