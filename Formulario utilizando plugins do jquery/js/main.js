
$('#telefone').mask('(00) 00000-0000')
$('#cep').mask('00000-000')
$('#cpf').mask('000.000.000-00')

$('form').validate({
    rules: {
        cep: {
            required: true,
            email: true
        },

        cpf: {
            required: true,
            email: true
        },
        
        telefone: {
            required: true
        },
    },
    messages: {
        nome: 'Por favor ensira o seu nome'
        
    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        console.log(camposIncorretos);
        
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
