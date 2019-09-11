/* 
	Método push dos arrays, server para adicinar
	itens no final do array.
*/

var arr = [ 1, 2, 3, `Rafael`, { bola: `azul` }, [ `la1`, `la2`, `la3` ] ];

console.log( arr.length );

// Adicionar um item no array com método push()
arr.push( { carro: `BMW` } );

console.log( arr.length );

// Passar uma função por parâmetro, adicionando uma função no array
// Uma ideia de programação funcional 
arr.push( function soma( x, y ) { return x + y; } );

console.log( arr );

// Invocar a função, inserindo dois argumentos para serem somados
console.log( arr[ 7 ]( 1, 2 ) );

// Adicionando outros valores no array
// Um valor qualquer
arr.push( null );

// Outro array
arr.push( [`a`, `b`, `c` ] );

console.log( arr );
