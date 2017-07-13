/**
 * http://usejsdoc.org/
 */
$(function(){
	var resposta = $.ajax({
		url:'http://localhost:8080/estados',
		method:'GET',
		dataType:'jsonp',
	});

	resposta.done(function(estados){
		var comboEstado = $('#combo-estado');
		estados.forEach(function(estado){
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			console.log(optionEstado);				
		});
	});
	
	resposta.done(function(estados){
		console.log('Funcionou mesmo !!!');
	});

	resposta.fail(function(){
		alert('Erro carregando estados do servidor!');
	});
});



 