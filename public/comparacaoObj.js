/**
 * http://usejsdoc.org/
 */

var pessoa1 = {
	nome : 'Gilberto',
	idade : 25,
	email : 'email@email.com.br',

	comparaEmail : function(obj) {
		// return this.email===obj.email;
		var comparacao = this.email === obj.email;
		if (comparacao === true) {
			return 'email são iguais';
		} else {
			return 'email são diferentes';
		}
	}
};

var pessoa2 = {
	nome : 'Maria',
	idade : 42,
	email : 'email@email.com.br',
};

console.log(pessoa1.comparaEmail(pessoa2));