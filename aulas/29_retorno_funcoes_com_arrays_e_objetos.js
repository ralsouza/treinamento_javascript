function myFunction() {
	return [1,2,3];
}

console.log( myFunction() )

// Acessar os itens do array pelo índice
console.log( myFunction()[0] )
console.log( myFunction()[1] )

// O índice 5 não existe, retorna undefined
console.log( myFunction()[5] )


// Adicionar funções dentro de propriedades em objetos
function myFunction2() {
	return {
		prop1: 1,
		prop2: 'rafael',
		prop3: function() {
			return 'prop3';
		}
	};
}

console.log( myFunction2() )

// Retornar o valor da propriedade prop1
console.log( myFunction2().prop1 )

// Adicionar o retorno em uma variável
var values = myFunction2();

console.log( values );

// Agora usar o nome da variável e os nomes das propriedades do objeto
console.log( values.prop2 );

// Retornar o valor do método(que é uma função dentro de um objeto) prop3
console.log( values.prop3() )
