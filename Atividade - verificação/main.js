    
    document.getElementById('form-comparacao').addEventListener('submit', function(e) {
    e.preventDefault();

    let numeroA = parseFloat(document.getElementById('campoA').value);
    let numeroB = parseFloat(document.getElementById('campoB').value);

    let mensagemErro = document.querySelector('.error-message');
    let mensagemSucesso = document.querySelector('.sucess-message');

    mensagemErro.style.display = 'none';
    mensagemSucesso.style.display = 'none';

    if (numeroB > numeroA) {

        mensagemSucesso.style.display = 'block';
    } else {

        mensagemErro.style.display = 'block';
    }
});