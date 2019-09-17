// Criar uma função e atribuir ao retorno uma varável que possui um objeto
function person() {

	var info = {

		name: 'Rafael',
		lastname: 'Lima'
	};

	return info;
}

// Invocar o objeto na função
console.log( person() );

// Invocar a propriedade name do objeto
console.log( person().name );

// Invocar o lastname da propriedade
console.log( person().lastname );

// NOVO!!! Também é possível retornar funções dentro de outras funções
/*
	function adder(x) {
		return function(y) {
			return x + y;
		};
	}

	Exemplo:

	function adder(x) {
		function addOther(y) {
			return x + y;
		}

		return addOther;
	}
*/

// Testar a função
function adder(x) {
	return function(y) {
		return x + y;
	};
}

// Atribuir a função com um parâmetro a uma variável
var add2 = adder(2);

// Imprimir a variável acima, passando outro valor como parâmetro
console.log( add2(3) );

// Ou fazer duas invocações seguidas, bem mais simples
console.log( adder(5)(8) );

// Passar objetos por parâmetro
