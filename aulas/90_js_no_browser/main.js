/*
	Definir uma IFFE para manter os objetos em escopo local, em todos os arquivos
*/

/*
	Objeto this

	Aparece em métodos de objetos, fazendo referência ao objeto principal.

	Ou seja, aponta para o objeto onde ele está dentro, possibilitando usar 
	as propriedades dos objetos.
*/

// this em objetos

/*

(function() {

	var myObject = {

		myProperty: 1,
		init: function init() {

			// Retornar o valor de myProperty, o this é
			// referência para myObject
			return this.myProperty;
		}
	};

	console.log( myObject.init() ); 
})();

*/

/*
	this em funções, pode ter 2 valores

	Primeiro valor, faz referência ao objeto global, o browser se chama Window
	e no Node chama-se Global.
*/

(function() {

	function myFunction() {

		/*
			Neste momento o this será apontado para o objeto Global,
			Sempre que houver uma função que não está em um objeto, ou
			não é um método de um objeto. O this apontará para o objeto Global.
			return this.
		*/
	}
	console.log(myFunction)
})();

(function() {

	function myFunction() {
		return this;
	}

	// Aqui aponta para o objeto Global
	console.log( 'myFunction: ', myFunction(), myFunction() === window );

	var myObject = {
		myProperty: 1,
		init: function init() {
			return this;
		}
	};

	// O this nunca é o mesmo, este this está dentro do myObject
	console.log( 'myObject: ', myObject.init(), myObject.init() === myObject );
})();

/*
	Segundo valor, referência em objeto instanciados, criando nossos 
	próprios construtores. Nomes de contrutores em JS, começam com letras
	maiúsculas.
*/

(function() {
	
	 function myFunction() {
	 	return this;
	 }

	 console.log( 'myFunction:', myFunction(), myFunction() === window );

	 var myObject = {
	 	myProperty: 1,
	 	init: function init() {
	 		return this;
	 	}
	 };

	 console.log( 'myObject: ', myObject.init(), myObject.init() === myObject );

	 // Nomes de contrutores, sempre iniciam em maiúsculo
	 function MyContructor() {
	 	this.prop1 = 'prop1';
	 	this.prop2 = 'prop2';
	 }

	 /*
		 Palavra chave new para instancia o novo objeto na memória
		 Este novo objeto se chamará constructor, onde o this apontará
		 para o que tiver contructor
		 var constructor = new MyContructor();
	 */
	 console.log( 'MyContructor: ', constructor );
})();
