/*
	MÉTODOS DE OBJETOS
*/

var obj = {x: 1, y: 2};

// Criar um objeto obj2 herdando as propriedades do obj
var obj2 = Object.create(obj);

// Criar um objeto obj3 com herdando as propriedades do obj2
var obj3 = Object.create(obj2);

/*
	Retorna as chaves de um objeto
	
	Object.keys(obj)
*/
console.log( Object.keys(obj) );

// Contar a quantidade de propriedades de um objeto
console.log( Object.keys(obj).length );

/*
	Checar se um objeto é protótipo de outro

	obj.isPrototypeOf( otherObj )
*/

// obj2 é herdado de obj?
console.log( obj.isPrototypeOf(obj2) );

// Apesar de obj3 não ser herdado diretamente de obj,
// ele foi herdado do obj2 que foi herdado do obj
console.log( obj.isPrototypeOf(obj3) );

// obj3 é herdado do obj3
console.log( obj2.isPrototypeOf(obj3) );

// obj não é herdado de obj2
console.log( obj2.isPrototypeOf(obj) );

/*
	Transformar o JSON em string

	JSON.stringify(obj)
*/
console.log( obj );

objString = JSON.stringify( obj );

console.log( typeof(objString) );

/*
	Transformar a string em objeto novamente

	JSON.parse(obj)
*/

objJSON = JSON.parse(objString);

console.log( typeof(objJSON) );

/*
	ARRAYS
*/

// Adicionar itens por indice
var arr = [];

arr[0] = 10;

arr[1] = 5;

arr[2] = 'oito';

console.log( arr );

console.log( arr[2] );

// O JScript adiciona na 12o
arr[12] = 'doze'

console.log( arr );

// Adicionar o final do array
arr.push('treze');

console.log(arr);

// Remover o último item do array
arr.pop()

console.log(arr);

// Novo array
var arr = [];

arr.push('arroz');

arr.push('feijao');

arr.push('macarrao');

console.log(arr);

/*
	Remover o último item do array e 
	adicioar o item removido em uma variável
*/
var lastValue = arr.pop();

console.log(lastValue);
