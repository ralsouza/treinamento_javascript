// IIFE - Immediately-Invoked Function Expression
// Ou funções auto-executáveis

// Uma função literal
function sum() {

	return 1 + 2;
}

// Invocando a função sum()
console.log( sum() );

// Uma função anônima atribuida em uma variável
var sum2 = function() {

	return 3 + 2;
};

console.log( sum2() );

// Ou uma função nomeada atribuida a uma variável

// var sum3 = function otherSum() {

// 	return 4 + 6;
// };

// Gera um erro, pois otherSum() foi atribuida na variável sum3()
// console.log( otherSum() ); 

// Atribuir uma função anônima em uma propriedade de um objeto
var obj = {

	prop: function() {

		return 1 + 2;
	}
};

console.log( obj.prop() );

// Em JS não é possível executar uma função anônima, 
// para resolver este problema executa-se a função como uma expressão de função

(function() {

	console.log( `IFFE Executada!` );
})();

// Uma das vantagens é forçar o uso do escopo local
