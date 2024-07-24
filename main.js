//começando a usar o Jquery''
// $ chamar o codigo Jquedry" "
$(document).ready(function(){
    //adicionando eventos aos elementos com jQuery
    $('header button').click(function(){
        //alert("Expandir formulário")
        //quando clicar no botao dentro do header
    $('form').slideDown(); // seleciona o formulario pelo $
        //funçao slideDown para dar efeito de abrir para baixo
    })

    $('#botao-cancelar').click(function(){// seleciona o id do botao pelo $
        //funçao slideDown para dar efeito de abrir para baixo
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
    })
}) 

//aplicando animações
