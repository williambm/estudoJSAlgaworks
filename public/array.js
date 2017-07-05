/**
 * http://usejsdoc.org/
 */

/* Criando Arrya */
var celulares = [];

/* Adicionando elementos no Array */
celulares.push('j5');
celulares.push('MotoE');

/* Listando Array */
console.log(celulares);

/* colocando elementos no inicio do Array */
celulares.unshift('Iphone5');

/* Listando Array */
console.log(celulares);

/* Percorrendo o Array com for tradicional */
console.log('');
for (var i = 0; i < celulares.length; i++) {
	console.log(celulares[i]);
}
console.log('');


/*usando o ForEach*/

celulares.forEach(function(e){
	console.log(e);
});
console.log('');

/* Retirando do fim do Array */
console.log('Item retirado do final do Array: ', celulares.pop());

/* Listando Array */
console.log(celulares);

/* Retirando do Início do Array */
console.log('Item retirado do Início do Array: ', celulares.shift());

/* Listando Array */
console.log(celulares);

/*Criando um novo Array para usar toString e Join*/
console.log('');
var nomes=[];
nomes.push('João');
nomes.push('Maria');
nomes.push('Paulo');
nomes.push('Luiz');
nomes.push('Madalena');

console.log(nomes);
console.log('com toString');
var emString=nomes.toString();
console.log(emString);
console.log('');
console.log('com join');
console.log(nomes.join(' - '));
