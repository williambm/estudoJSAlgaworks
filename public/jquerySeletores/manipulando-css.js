$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuario');

	function estilizarLinhaUsuario(){
		selecaoUsuarios.filter(':checked').parents('tr').addClass('Selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('Selecionado');
	}
	
	selecaoUsuarios.on('click', function() {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var checked = selecaoUsuarios.length === totalUsuariosSelecionados;
		selecaoTodosUsuarios.prop('checked', checked);
	});

	selecaoTodosUsuarios.on('click', function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		/*if(selecaoTodosUsuarios.prop('checked')){
			selecaoUsuarios.parents('tr').addClass('Selecionado');
		}else{
			selecaoUsuarios.parents('tr').removeClass('Selecionado');
		}*/
		estilizarLinhaUsuario();
	});

	selecaoUsuarios.on('change', function(evento){
		var selecaoUsuario =$(evento.target);
		/*if(selecaoUsuario.prop('checked')){
			selecaoUsuario.parents('tr').addClass('Selecionado');
		}else {
			selecaoUsuario.parents('tr').removeClass('Selecionado');
		}*/
		
		estilizarLinhaUsuario();		
		console.log(selecaoUsuario);
	});
});