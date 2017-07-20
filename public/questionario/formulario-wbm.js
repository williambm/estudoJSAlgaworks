$(function() {
    $("select").change(function () {
        
    var selecao = "";
    var $abreDivForm = "<div class='form-group form-atividade'>",
        nome = "<label>Nome</label><input class='form-control'></input>",
        pergunta = "<br><label>Quais destas atividades você mais gosta?</label>",
        atividadesFemininas = ("<div class='checkbox atividades'><label><input type='checkbox' value='1'>Correr no parque</label><br>" +
                              "<label><input type='checkbox' value='2'>Pedalar</label><br>" +
                              "<label><input type='checkbox' value='3'>Jogar Volei</label><br>" ),
        atividadesMasculinas = ("<div class='checkbox atividades'><label><input type='checkbox' value='1'>Tomar cerveja</label><br>" +
                              "<label><input type='checkbox' value='2'>Pedalar</label><br>" +
                              "<label><input type='checkbox' value='3'>Jogar Videogame</label><br>" ),
        fechaDiv = "</div></div>";
        
        
        
        $('select option:selected').each(function() {
           selecao = $(this).text();
        });
        console.log(selecao);
        console.log(typeof($divFeminino));
        var htmlFeminino = $abreDivForm+nome+pergunta+atividadesFemininas+fechaDiv;
        var htmlMasculino = $abreDivForm+nome+pergunta+atividadesMasculinas+fechaDiv;
            
            if(selecao === "Feminino") {
                $(".escolha-genero").append(htmlFeminino);//Inserido no fim da div do form-group, funciona.
            } else {
                $(".escolha-genero").append(htmlMasculino);
            }
        
            $("#comboGenero").on('change',function(){ //Tentativa de criar um evento para realizar a limpeza on change.
            $('.form-atividade').closest('div').remove('label');            
        });
       
    });   
      
});