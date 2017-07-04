/**
 * http://usejsdoc.org/
 */
var focus = { cor:'preto', fabricante:'ford', placa:'opf-7414'};

console.log('focus =',focus);

console.log('Fabricante : ',focus['fabricante']);/*exibe o fabricante*/

focus.portas=4;

console.log(focus);

focus.ligar= function(){
	console.log('focus ligado !!!');
} ;

console.log(focus);
focus.ligar();

/*criando o objeto sienna*/

var sienna = {
	cor:'prata',
	fabricante:'fiat',
	ano:'2009',
	ligar:function(){
		console.log('Sienna Ligado !!!');
	},
};

console.log('sienna', sienna);

/*objeto dentro de outro objeto*/

var patricia={
		nome:'patricia',
		idade:22,
		endereco:{
			rua:'catarina stach',
			municipio:'são paulo',
		},
};

console.log(patricia);
console.log(patricia['nome'],patricia['endereco']['rua']);

/*Exemplo de For In */
for(var prop in patricia){
	console.log(patricia[prop]);
	console.log('#########');
	console.log(patricia);
}

