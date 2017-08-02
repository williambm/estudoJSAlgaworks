var Estado = (function() {
    
    function Estado() {
        this.comboEstado = $('#combo-estado');
        this.emitter = $ ({});
        this.on = this.emitter.on.bind(this.emitter);
    }
    
    Estado.prototype.iniciar = function () {
        $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp',
        success: onEstadosRetornados.bind(this),
        error: onError
        });
        
        this.comboEstado.on('change', onEstadoAlterado.bind(this));
        
        function onEstadoAlterado(){
            this.emitter.trigger('alterado', this.comboEstado.val());
        }
    }
    
    function onEstadosRetornados(estados) {        
        this.comboEstado.html('<option value="">Selecione o estado</option>');
		estados.forEach(function(estado) {
		  var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
		  console.log(optionEstado);
		  this.comboEstado.append(optionEstado);
		}.bind(this));
    }
    
    function onError() {
        alert('Erro carregando estados do servidor!');
    }
         return Estado; 
}) (); 

var Cidade = (function(){
    function Cidade (estado){
        this.comboCidade = $('#combo-cidade');
        this.estado = estado;
    }
    Cidade.prototype.iniciar = function (){
        //handle quando alterar estado
        this.estado.on('alterado', onEstadoSelecionado.bind(this));
    }
    
    //Requisição AJAX das cidades no servidor.
    function onEstadoSelecionado(evento, uf){
        if(uf){
            $.ajax({
                url: 'http://localhost:8080/cidades',
                method: 'GET',
                dataType: 'jsonp',
                data: {
                    uf: uf
                },
                success: onCidadesRetornadas.bind(this),
                error: onError
            });
        } else {
            reset.call(this);//Chama a função reset por call mas poderia ser reset.apply(this), a diferença é que o apply usa parametros dentro de um array.
        }
    }
    
    function reset(){
        this.comboCidade.html('');
        this.comboCidade.attr('disabled','disabled');
    };
    
    function onCidadesRetornadas(cidades){
        this.comboCidade.removeAttr('disabled');
        this.comboCidade.html('<option>Selecione a cidade</option>');
        cidades.forEach(function(cidade){
            var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
            this.comboCidade.append(optionCidade);
        }.bind(this));
    }
    
    function onError(){
        alert('Erro Carregando cidades!')
    }
    
    return Cidade;
})();

$(function(){
    var estado = new Estado();
    estado.iniciar();
    
    var cidade = new Cidade(estado);
    cidade.iniciar();
    
});