(function() {

	/*
		É um objeto array-like, pois é parecido com um array, funciona como um array,
		mas não é um array. E aparece implicitamente dentro de funções.
	*/

	function myFunction( arg1, arg2 ) {

		/* 
			Retornará todos argumentos. Embora pareça, 
			o objeto não é um array
		*/
			return arguments;
	}

	console.log( myFunction( 1, 2 ) );

	/*
		É possível retornar os valores, como se faz com arrays
	*/

	function myFunction2( arg1, arg2 ) {

		return arguments[1];
	}

	console.log( myFunction2( 1, 2 ) );

})();
