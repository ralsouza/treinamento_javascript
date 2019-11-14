
/*
	MAIS MÉTODOS DE ARRAYS
    - toString();
    - concat();
    - unshift();
    - shift().
*/

var arr = [1,2,3];

console.log( arr[0] );

// Comprimento do array
console.log( arr.length );

// Adicionar um item no array
arr.push(4);

console.log( arr );

// Converter o objeto para uma string .toString()
var obj = { a: 1, b: 2, c: 3 };

console.log( obj.toString() );

// Converter um array para uma string com .toString()
// Cada item do array será convertido para uma string, separado por uma vírgula
// Assim como é feito com .join(), mas com join é possível determinar o separador
console.log( arr.toString() );

// Método .concat(), não modifica o array como é com push(),
// apenas concatena com outro objeto
console.log( arr.concat(5) );

console.log( arr.concat( [6,7,8,9] ) );

console.log( arr.concat( [6,7,8,9], [10,11,12] ) );

// Arrays multidimensionais não são quebrados com contact()
console.log( arr.concat( [ 6, 7, 8, 9, [10, 11, 12 ] ] ) );

// Adicionar um item no inicio do array e retorna o comprimento do array .unshift()
// Lembrando que .push() adiciona ao final
console.log( arr.unshift(0) );

console.log( arr );

// Remover o primeiro item de um array e retornar o item removido .shift()
console.log( arr.shift() );

console.log( arr );
