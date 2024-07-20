const form = document.getElementById('form-numeros-validar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valPrimeiroNumero = document.getElementById('primeiro-numero').value;
    const valSegundoNumero = document.getElementById('segundo-numero').value;

    const valorPrimeiroNumero = Number (valPrimeiroNumero);
    const valorSegundoNumero = Number (valSegundoNumero);

    const mensagemSucesso = document.querySelector('.mensagemVerdadeiro');
    const mensagemErro = document.querySelector('.mensagemFalso');

    const textoSucesso = `Parabéns, o valor <b>${valSegundoNumero}</b> é maior que o valor <b>${valPrimeiroNumero}</b>`;
    const textoErro = `Infelizmente, o valor <b>${valSegundoNumero}</b> é menor que <b>${valPrimeiroNumero}</b>. Tente novamente`;


    if(valorSegundoNumero > valorPrimeiroNumero) {
        mensagemSucesso.innerHTML = textoSucesso;
        mensagemErro.innerHTML = '';
        mensagemErro.style.display = 'none';

    }
    else {
        mensagemErro.innerHTML= textoErro;
        mensagemSucesso.innerHTML= '';
        mensagemSucesso.style.display ='none';
    }
    valPrimeiroNumero.value = '' ;
    valSegundoNumero.value = '' ;
})

console.log(form);