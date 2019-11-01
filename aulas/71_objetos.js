/*
	OBJETOS
	- Mutáveis;
	- Manupulados por referência.
*/

var obj = {
	prop1: 'value1',
	prop2: 'value2'
};

console.log(obj);

var obj2 = {
	prop1: 'value1',
	prop2: 'value2'
};

console.log(obj2);

// Alterar o valor de uma propriedade
obj.prop1 = 'propriedade 1';

console.log(obj);

// Deletar uma propriedade de um objeto
delete obj.prop1;

console.log(obj);

// Adicionar propriedade (Reinserir o valor que foi deletado acima)
obj.prop1 = 'prop1';

console.log(obj);

/*
	CRIAÇÃO DE OBJETOS
	- Literais;
	- Como Construtor (new);
	- Com Object.create().
*/

// Criar objetos com Object.create()
var obj = Object.create();

/*
	PROTÓTIPO DE OBJETOS
	- Object.prototype

	É o protótipo de um objeto que está sendo criado, sempre ao criar
	um objeto, ele herda o modelo de seu protótipo.
*/
