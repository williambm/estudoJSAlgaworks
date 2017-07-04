/**
 * http://usejsdoc.org/
 */
var nome = 'william';

console.log(typeof nome, nome.length);
console.log(nome.indexOf('i'));
console.log(nome.toUpperCase());/* ele não substitui a variavel */
console.log(nome);

/* Entendendo conceito de false e true no JS */
console.log(!!0);/* no js o 0 é false, coloquei dois !! para ser um NOT NOT */

/* JS aceita 0 , undefined, string, true e false para compararções booleanas */
/* No caso de String, ela vazia é false.. ao contrário é true */

console.log('');/* Da False */

/* ################################## */
/* typeOf */
console.log('Exemplos de uso do typeOf');
var obj = {};
console.log(typeof obj);

var x = null;
console.log(typeof null);

var array = [];
console.log(typeof array);

var f = Function();
console.log(typeof f);

/* ################################## */
/* Estrutura de controle IF*/

var idade=2;

if(idade){
	console.log('você tem: ',idade,' anos');
}else{
	console.log('Problemas com a captação da sua idade..');
}

/*IF ternário*/
var saida=idade? 'Você tem: '+idade +' anos': 'problemas com a captação da idade';
console.log(saida);

/*Função autoexecutável*/
var autoExec = (function () {
	var nro = 0;
	return function () {
		return nro ++;
	};
})();

console.log(autoExec());