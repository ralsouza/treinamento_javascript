// Escopo de Funções

function myFunction() {

	function sum() {

		return 1 + 2;
	}

	return sum();
}

console.log( myFunction() );

// Questão: Agora é possível usar a função sum() fora da função myFunction() ?


//console.log( sum() ); 
// Gerou um erro em que sum() não foi definida, pois ela pertence apenas ao escopo de myFunction()

function myFunction() {

	// As variáveis abaixo pertencem apenas ao escopo de myFunction()
	var num1 = 1;
	var num2 = 2;

	function sum() {

		return num1 + num2;
	}

	return sum();
}

console.log( myFunction() );

// Teoricamente a função abaixo não deveria funcionar, 
// pois a função foi definida depois da invocação no return

function myFunction() {

	var num1 = 1;
	var num2 = 2;

	return sum();

	function sum() {

		return num1 + num2;
	}
}

console.log( myFunction() );

// Mas a função funciona, a mágica por trás disso chama-se HOISTING
