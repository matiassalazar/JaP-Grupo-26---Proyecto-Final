$(document).ready(function(){ 
    
    $('#submitRegister').on('click', sendForm);

    function sendForm(){
    
       if(userfound==false){

            $(':input[type="submit"]').prop('disabled', false);
            $(':input[type="submit"]').css({'opacity':'1','cursor':'pointer'});

            var db_usuarios = "http://localhost:3000/usuarios";
            var $email = $('#email').val();
            var $firstname = $('#firstname').val();
            var $lastname = $('#lastname').val();
            var $password = $('#password1').val();
            var $sex = 0;
            if($('#female').is(':checked')){
                var $sex = 1;
            }
            var $newsletter = false;
            if($('#newsletter').is(':checked')){
                var $newsletter = true;
            }
            var user = {
                "email" : $email,
                "firstname" : $firstname,
                "lastname" : $lastname,
                "password" : $password,
                "sex" : $sex,
                "newsletter" : $newsletter
            }
                $.ajax({
                    type: "POST",
                    data : user,
                    url: db_usuarios,
                    success: usuario_creado
                });
                function usuario_creado(){
                    console.log("El usuario ha sido creado satisfactoriamente");
                    $('#registerShow').removeClass('open'); // Remueve la clase .open al div de registro para que se oculte
                    $('#close-register').removeClass('open'); // Remueve la clase .open al div de cerrado para que se oculte
                    $("body").css("overflow", "auto"); // Mostramos las barras de scroll de la página
                    $('#formulario-registro')[0].reset(); // Reseteamos los valores del formulario
                }
        }
        else{
            // agrego disabled al boton submit
            $(':input[type="submit"]').prop('disabled', true);
            $(':input[type="submit"]').css({'opacity':'0.4','cursor':'not-allowed'});
        } 
    }
});