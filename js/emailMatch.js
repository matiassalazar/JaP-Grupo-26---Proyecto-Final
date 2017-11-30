var userfound = false;
$(document).ready(function(){ 
    
    $('#email').on('blur', checkMail);
    
    function checkMail(datos){
        var db_usuarios = "http://localhost:3000/usuarios";
        var $email = $('#email');
        $.ajax({
            type: "GET",
            data : {email: $email.val()},
            url: db_usuarios,
            success: procesar_usuarios
        });
        function procesar_usuarios(datos) {
            if(datos.length>0){
                $('#email').css({'border':'2px solid red'});
                $('#emailMatch').css({'display':'block'});
                userfound = true;
                console.log("user found");
            }
            else{
                $('#email').css({'border':''});
                $('#emailMatch').css({'display':'none'});
                userfound = false;
                console.log("user not found");
                $(':input[type="submit"]').prop('disabled', false);
                $(':input[type="submit"]').css({'opacity':'1','cursor':'pointer'});
                }
            }
        }
});