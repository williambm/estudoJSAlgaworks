var contador = (function(){
    var valor = 0; //Como o valor está dentro da função ele fica como privado deste forma.
    
    return {
        incrementar: function(){
            valor++;
        },
        reset: function(){
            console.log('valor do contador: ', valor);
            valor = 0;
        }
    }
}());
contador.incrementar();
contador.incrementar();
contador.reset();