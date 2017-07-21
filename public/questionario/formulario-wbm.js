$(function() {
    $("select").change(function () {
    
        //variaves que criam o HTML    
        var selecao = "";
        var $abreDivForm = "<div class='form-group form-atividade'>",
        nome = "<label>Nome</label><input class='form-control'></input>",
        pergunta = "<br><label>Quais destas atividades você mais gosta?</label>",
        atividadesFemininas = ("<div class='checkbox atividades'><label><input type='checkbox' value='1'>Correr no parque</label><br>" +
                              "<label><input type='checkbox' value='2'>Pedalar</label><br>" +
                              "<label><input type='checkbox' value='3'>Jogar Volei</label><br>" +
                              "<br><label>Data de nascimento</label><input type='text' class='form-control date' name='field-name'/>"),
        atividadesMasculinas = ("<div class='checkbox atividades'><label><input type='checkbox' value='1'>Tomar cerveja</label><br>" +
                              "<label><input type='checkbox' value='2'>Pedalar</label><br>" +
                              "<label><input type='checkbox' value='3'>Jogar Videogame</label><br>" +
                              "<br><label>Data de nascimento</label><input type='text' class='form-control date' name='field-name'/>" ),
        fechaDiv = "</div></div>";
        
        
        //Função que cuida das mascaras dos campos de datas e afins...
        $(".date").mask('00/00/0000');        
        
        
        //Evento que captura o texto do combobox
        $('select option:selected').each(function() {
           selecao = $(this).text();
        });
        console.log(selecao);
        console.log(typeof($divFeminino));
        var htmlFeminino = $abreDivForm+nome+pergunta+atividadesFemininas+fechaDiv;
        var htmlMasculino = $abreDivForm+nome+pergunta+atividadesMasculinas+fechaDiv;
            
            if(selecao === "Feminino") {
                $(".form-atividade").empty();//Caso já haja uma div inserida anteriormente ele limpa o elemento.
                $(".escolha-genero").append(htmlFeminino);//Inserido no fim da div do form-group, funciona.               
            } else {
                $(".form-atividade").empty();
                $(".escolha-genero").append(htmlMasculino);               
            }          
       
    });   
      
});