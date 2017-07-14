/**
 * http://usejsdoc.org/
 */

/* Captura o valor do campos valor e total do formulário */

$(function() {
    var valorElement = $('#valor');
    var totalElement = document.getElementById('total');
    var totalmascara = $('#total-mascara');
    var mascaraConfig = {
        decimal:',',
        thousands:'.',
        prefix:'R$ '        
    };

    console.log('valorElement', valorElement);

    valorElement.on('keyup', function(e) {
        var valor = valorElement.maskMoney('unmasked')[0];
        //var valor = parseFloat(valorElement.val() ? valorElement.val() : '0');
        var total = 0;

        /* implementação de uma lógica de atribuição para total */
        if (valor > 0 && valor < 10) {
            total = valor + valor * 0.3 + 5;
        } else if (valor >= 10 && valor < 50) {
            total = valor + valor * 0.1 + 2;
        } else {
            total = valor;
        }
        totalmascara.maskMoney(mascaraConfig);
        totalmascara.maskMoney('mask',total);
        totalElement.innerHTML = totalmascara.val();
        
    });
    valorElement.maskMoney(mascaraConfig);
});