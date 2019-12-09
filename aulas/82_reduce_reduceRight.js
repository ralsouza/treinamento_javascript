/*
	.reduce( param1, param2)

	param1: Função de redução
	param2: Um valor inicial

	Não modifica o array original, retorna o número reduzido todos os itens do array em um único item.
*/

var arr = [ 1, 2, 3, 4, 5 ];

var reduce = arr.reduce( function( valorAcumulado, valorAtual, index, array ) {

	return valorAcumulado + valorAtual;
}, 0 ); // Este 0 não é obrigatório, mas existem casos que é interessante usar

console.log( reduce );

/*
	Obtém o valor inicial definido como 0 e é somado com o primeiro valor e assim por diante. 

	1ª: 0  + 1 = 1
	2ª: 1  + 2 = 3
	3ª: 3  + 3 = 6
	4ª: 6  + 4 = 10
	5ª: 10 + 5 = 15 
*/

var arrStr = ['R','a','f','a','e','l'];

/*
	Soma de strings ocorre em concatenação.
*/

var reduceStr = arrStr.reduce( function( valorAcumulado, valorAtual, index, array ) {

	return valorAcumulado + valorAtual;
});

console.log( reduceStr );


/*
	reduceRight()

	Efetua o mesmo trabalho do reduce, porém da direita para a esquerda.
*/

var reduceRight = arrStr.reduceRight( function( valorAcumulado, valorAtual, index, array ) {

	return valorAcumulado + valorAtual;
});

console.log( reduceRight );
