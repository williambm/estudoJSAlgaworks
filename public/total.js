/**
 * http://usejsdoc.org/
 */
console.log('Carregando...');

/*Captura o valor do campos valor e total do formulário*/

var valorElement = document.getElementById('valor');
var totalElement = document.getElementById('total');

console.log('valorElement',valorElement);

valorElement.addEventListener('keyup', function(e) {
	var valor = parseFloat(valorElement.value);
	var total = 0;
	
	/*implementação de uma lógica de atribuição para total*/
		if(valor<10){
			total= valor +valor * 0.3 + 5;
		}else if (valor>=10 && valor <50) {
			total= valor+valor *0.1+2;
		}else{
			total=valor;
		}
	
	totalElement.innerHTML = total;
});