/*
	CRIAÇÃO DE OBJETOS

	Herança
	Object.create()
*/

 var obj = {x: 1, y: 2};

// O objeto obj2, herdará as propriedades do obj criado acima
 var obj2 = Object.create(obj);

// É um objeto vazio
 console.log(obj2);

 // Não retorna a propriedade prototype
console.log(obj2.prototype);

// Agora chamar em obj2, a propriedade x herdada de obj
console.log(obj2.x);
console.log(obj2.y);

/*
	Se alterar uma das propriedades no objeto pai, a mesma propriedade
	será alterada no objeto filho também. Mas o contrário não ocorre.
*/

// Alterar valor da propriedade no objeto pai
obj.x = 2;

console.log(obj2.x);

obj2.x = 'foo bar';

console.log(obj.x);
console.log(obj2.x);

// Como não acessar as propriedades herdadas
console.log(obj);

// Retorna true, indicando que x pertence ao objeto
console.log(obj.hasOwnProperty('x'));

// O objeto 2 não tem a propriedade y
console.log(obj2.hasOwnProperty('y'));

// Iterar sobre as propriedades nativas do objeto, exceto as herdadas
for( var prop in obj2 ) {

	if( obj2.hasOwnProperty(prop) ) {

		console.log(prop);
	}
}
