;(function() {

	/*
		Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
		Crie um objeto chamado `person`, com as propriedades:
		    `name`: String
		    `lastname`: String
		    `age`: Number
		Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
		de valor para cada propriedade.
	*/
	
	var person = {
		name: 'Rafael',
		lastname: 'Lima',
		age: 36
	};


	console.log( 'Propriedades de "person":' );

	/*
		Mostre no console, em um array, todas as propriedades do objeto acima.
		Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( Object.keys( person ) );

	/*
		Crie um array vazio chamado `books`.
	*/
	var books = [];

	/*
		Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
		seguintes propriedades:
		`name`: String
		`pages`: Number
	*/
	books.push( 
		{ name: 'Livro 1',
		  pages: 300
		},
		{ name: 'Livro 2',
		  pages: 500
		},
		{ name: 'Livro 3',
		  pages: 250
		}
	);

	console.log( '\nLista de livros:' );

	/*
		Mostre no console todos os livros.
	*/
	console.log( books );

	console.log( '\nLivro que está sendo removido:' );
	/*
		Remova o último livro, e mostre-o no console.
	*/
	console.log( books.pop() );

	// Ou também, atribuindo o valor removido em uma variável
	// lastValue = books.pop();

	console.log( '\nAgora sobraram somente os livros:' );
	/*
		Mostre no console os livros restantes.
	*/
	console.log( books );

	/*
		Converta os objetos que ficaram em `books` para strings.
	*/
	var books = JSON.stringify( books );

	console.log( '\nLivros em formato string:' );

	/*
		Mostre os livros nesse formato no console:
	*/
	console.log( books );

	/*
		Converta os livros novamente para objeto.
	*/
	var books = JSON.parse( books );

	console.log( '\nAgora os livros são objetos novamente:' );
	console.log( books );

	/*
		Mostre no console todas as propriedades e valores de todos os livros,
		no formato abaixo:
		    "[PROPRIEDADE]: [VALOR]"
	*/
	
	console.log('\nAs propriedades no formato "[PROPRIEDADE]: [VALOR]": (Forma manual)');

	for( var i = 0; i < books.length; i++) {

		console.log( books[i].name + ': ' + books[i].pages );
	}


	console.log('\nAs propriedades no formato "[PROPRIEDADE]: [VALOR]": (Forma dinâmica)');

	for( var i = 0; i < books.length; i++ ) {

		for( prop in books[i] ) {

			console.log( prop + ': ' + books[i][prop] );
		}
	}

	/*
		Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
		seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['R','a','f','a','e','l',' ','L','i','m','a'];

	console.log( '\nMeu nome é:' );

	/*
		Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log( myName.join('') );

	console.log( '\nMeu nome invertido é:' );
 
	/*
		Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log( myName.reverse().join('') )

	console.log( '\nAgora em ordem alfabética:' );
	/*
		Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log( myName.sort() );

	// O padrão do JS é retornar primeiro os espaços, depois as letras maiusculas e por fim as minúsculas

})();
