/**
 * http://usejsdoc.org/
 */
var resposta = $(function(){
	$.ajax({
		url:'http://localhost:8080/estados',
		method:'GET',
		dataType:'jsonp',
	});

});

resposta.done(function(){
	console.log('tudo certo',estados);
});

resposta.done(function(){
	console.log('Funcionou mesmo !!!');
});

 