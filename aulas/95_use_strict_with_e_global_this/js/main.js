/*
	use strict: uso do with e global this === undefined

	Além de não permitir a declaração de variáveis
	sem a palavra-chave var, o 'use strict' também
	não permite o uso do comando 'with'. Porque os 
	nomes as propriedades pode se confundir com os
	nomes das variáveis. 

	Então o erro é gerado: É gerado o erro: Uncaught SyntaxError: Strict mode code may not include a with statement

	O comando 'with' é usado para reduzir o tamanho
	de um objeto.
*/

// Exemplo: O que o comando 'with'
(function() {

	'use strict';

	var obj = {
		prop1: {
			prop2: {
				prop3: {
					prop31: 'prop31',
					prop32: 'prop32',
					prop33: 'prop33'
				}
			}
		}
	};

	console.log( obj.prop1.prop2.prop3 );

	/*
		with( obj.prop1.prop2.prop3 ) {

			console.log( prop31, prop32, prop33 );
		}
	*/

/*
	Usando 'use strict' no escopo global, dentro de funções o 
	'this' é igual a 'undefined', não deixando o 'this'
	associado ao escopo global.
*/

	function Person( name, lastName, age) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
	}

	/*
		Usando strict, não é possível instanciar um 
		objeto sem a palavra-chave new.
	*/
	console.log( new Person('Rafael', 'Lima', 36) );


})();
