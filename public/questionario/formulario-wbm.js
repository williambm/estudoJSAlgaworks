$(function(){
    $("select" ).change(function(){
        
    var selecao = "";
        $('select option:selected').each(function(){
           selecao = $(this).text();
        });
        console.log(selecao);
    });
    
});