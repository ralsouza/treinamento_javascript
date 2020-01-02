/*
	Diretiva 'use strict';

	Informa o browser que apartir do comando, 
	tudo estará em escopo restrito.

	Não permite a declaração de variáveis sem
	a palavra chave var.
*/

(function() {

	'use strict';
	
	// Esta variável não é vista fora desta IIFE, pois é local.
	var name = 'Rafael Lima';

	console.log( name );
})();
