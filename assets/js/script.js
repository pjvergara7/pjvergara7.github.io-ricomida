$('#enviarCorreo').click(function(){
    alert("El correo fue enviado correctamente...");
});

$('#rojo1').dblclick(function(){
    $(this).css('color', 'red');
});

$('#rojo2').dblclick(function(){
    $(this).css('color', 'red');
});

$("#desaparece1").click(function(){
    $(".card-text1").toggle();
})

$("#desaparece2").click(function(){
    $(".card-text2").toggle();
})

$("#desaparece3").click(function(){
    $(".card-text3").toggle();
})
