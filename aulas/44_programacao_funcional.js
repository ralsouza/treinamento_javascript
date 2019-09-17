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

// Também é possível retornar funções
