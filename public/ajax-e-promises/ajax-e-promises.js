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
		//comboEstado.empty();
		comboEstado.html('<option>Selecione o estado</option>');
		estados.forEach(function(estado){
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			console.log(optionEstado);
			comboEstado.append(optionEstado);							
		});
	});
	
	resposta.done(function(estados){
		console.log('Funcionou mesmo !!!');
	});

	resposta.fail(function(){
		alert('Erro carregando estados do servidor!');
	});
});



 