/*
	WRAPPER OBJECTS

	Valores primitivos não são objetos, eles são exatamente como são apresentados
	Objetos possuem propriedades e métodos
*/

var name = 'Rafael';
console.log(name.length);

/*
	A string acima possui uma propriedade, apensar de ser um valor
	princípio primitivo. Isso é possível através dos contrutores.

	Por baixo dos panos acontece o seguinte:

		var name = new String('Rafael');
		var age = new Number(30);
		var ninja = new Boolean(true);
*/

/* 
	Aqui o valor primitivo é transformado, 
	onde o JavaScript cria um novo objeto 
	encapsulando (wrapping up) e finalmente o JS 
	descarta este objeto da memória
*/
var name = new String('Rafael');

// Abaixo vemos que a variável foi transformada em um objeto
console.log(name)

// Invocar a propriedade length para o objeto name
console.log(name.length);

// Extrair o valor literal do objeto name
console.log(name.valueOf())

/*
	Sem o new os valores são convertidos.

	var name = String(30);
	var age = Number('36');
	var ninja = Boolean(1);
*/

var myVar = String(10);

// O número 10 aqui é uma String
console.log(myVar);

var myVar = Boolean(0);

console.log(Boolean(0));

console.log(Boolean({}));

console.log(Boolean(!{}));
