// Passar objetos como argumentos em funções
var arr = [1,2,3];

function myFunction( arg ) {
	return arg;
}

// O retorno será undefined, pois nada está sendo passado no argumento
console.log( myFunction() );

// Adicionando o array no argumento
console.log( myFunction( arr ));

// Retornar o índice 1 do array
function myFunctino2( arg ) {
	return arg[1];
}

console.log( myFunctino2( arr ));

// Agora com objetos como argumentos
console.log( myFunctino2( [1,3,5,6,7,8] ) );

// Retornar todo argumento
console.log( myFunction( ['rafael',1,true,34] ) )

// Atribuir um objeto em uma variável
var obj = {
	nome: 'Rafael',
	curso: 'JavaScript',
	ninja: true
}

console.log( obj );

// Criar uma função que retorna o argumento
function myFunction3( arg ) {
	return arg;
}

// Como não há argumento, o retorno é undefined
console.log( myFunction3() );

// Agora com alguns dados de entrada
console.log( myFunction3( 1 ) );

// Retornando dados do objeto através da função
console.log( myFunction3( obj ) );

// Retornar a propriedade nome
console.log( myFunction3( obj ).nome );

console.log( myFunction3( obj ).ninja );

// Criar uma função que retorna uma propriedade específica
function myFunction4( arg ) {
	return arg.curso;
}

// Como o retorno aguarda um argumento de entrada, um erro será gerado
// console.log( myFunction4() );

// Agora com o objeto como argumento
console.log( myFunction4( obj ) );
