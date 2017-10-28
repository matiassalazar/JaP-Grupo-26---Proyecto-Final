$(document).ready(function(){  

    // Mostrar div register
    $('.register, #register').click(function(){
        if($('#button-menu').attr('class') == 'fa fa-close' ){
            $('#button-menu').removeClass('fa fa-close').addClass('fa fa-bars'); // Agregamos el icono del Menu
            $('.navegacion .menu').css({'left':'-320px'}); // Ocultamos el Menu
            $('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,.0)'}); // Ocultamos el fondo transparente
        }  
        $('#registerShow').addClass('open'); // Agrega la clase .open al div de registro para que se muestre
        $('#close-register').addClass('open'); // Agrega la clase .open al div de cerrado para que se muestre
        $("body").css("overflow", "hidden"); // Ocultamos las barras de scroll de la página
    });
    $('#close-register').click(function(){
        
        $('#registerShow').removeClass('open'); // Remueve la clase .open al div de registro para que se oculte
        $('#close').removeClass('open'); // Remueve la clase .open al div de cerrado para que se oculte
        $("body").css("overflow", "auto"); // Mostramos las barras de scroll de la página
    });
});