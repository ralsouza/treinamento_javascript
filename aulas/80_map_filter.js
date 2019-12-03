/*
	.map()

	Recebe uma função como parâmetro, que percorrerá todo o array, retornando 
	um novo array com as alterações. O array original não é alterado.

	A diferença com o forEach(), é que o map() já retorna o array, ao contrário do forEach()
*/

var arr = [1,2,3,4,5];

var map = arr.map( function( item, index, array ) {

	// Somar uma unidade em cada item do array
	return item + 1;
} );

console.log( arr, map );

// Retornar o indice
var map = arr.map( function( item, index, array ) {

	return index;
});

console.log( arr, map );

// Retornar um objeto que seja indice e o item
var map = arr.map( function( item, index, array ) {

	return { index: index, item: item };
});

console.log( map  );

// Se fosse com forEach()
var newArr = [];

arr.forEach( function( item, index, array ) {

	newArr.push( { index: index, item: item } );
});

console.log('newArr: ');
console.log( newArr );

/*
	.filter()

	Gera um novo array, filtrando os itens do array
*/

var filter = arr.filter( function( item, index, array ) {

	// Gerar um array onde o item seja maior que 2
	return item > 2;
} );

console.log( filter );

// Usar map() e filter() em conjunto
var map = arr.map( function( item ) {

	// Adicionar uma unidade em cada item do array
	return item + 10;
});


// Usando o retorno do map() no filter(), usando o array criado no map()
var filter = map.filter( function( item ) {

	// Retornar os itens maiores que 2
	return item > 13;
});

console.log( filter );

// Encadeando os métodos juntos, já que o retorno do map já um array
var map = arr.map( function( item ) {

	return item + 10;
}).filter( function( item ) {
	
	return item > 13;
});

console.log('Retorno do encadeamento dos métodos: ', map)
