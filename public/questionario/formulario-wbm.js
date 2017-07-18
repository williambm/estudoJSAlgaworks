$(function()  {
    $("select").change(function () {
        
    var selecao = "";
    var $divFeminino = "<div class='form-group'><label>Nome</label></div>";//qual a melhor forma de inserir conteúdo por html com jquery??
        $('select option:selected').each(function() {
           selecao = $(this).text();
        });
        console.log(selecao);
        console.log(typeof($divFeminino));
        $("select").append($divFeminino);
            if(selecao === "Feminino") {
                $(".escolha-genero").html("<h2>Foi!</h2>");//a forma de usar o append está errada, por que ???Resp.1 -> estou apenas fazendo replace.... mas não estou inserindo um novo elemento este está sendo o problema!!
        } 
    });
    
});