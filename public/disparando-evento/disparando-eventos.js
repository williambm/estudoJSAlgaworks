$(function () {
    var atividade = $('#atividade');
    var listaAtividades = $('#lista-atividades');
    
    atividade.on('keyup', function (e) {
        var keyCode = e.keyCode;
        
        if (keyCode === 13) {
            //Dispara evento
            atividade.trigger('enter', atividade.val()); //Cria um gatilho para um evento personalizado chamado evento
            atividade.val('');
        }
    });
    //Cria uma função para o evento personalizado evento que quando é executado a função executa também devido o ON
    atividade.on('enter', function (evento, texto) {
        listaAtividades.prepend('<li>' + texto + '</li>');
    });
});