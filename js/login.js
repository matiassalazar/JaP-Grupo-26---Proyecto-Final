$(document).ready(function(){ 
    
    $('#submitLogin').on('click', login);
    
    function login(datos){
        var db_usuarios = "http://localhost:3000/usuarios";
        var $email = $('#emailLogin').val();
        var $password = $('#passwordLogin').val();
        $.ajax({
            type: "GET",
            data : {email: $email, password: $password},
            url: db_usuarios,
            success: login_success
        });
        function login_success(datos) {
            var jsMail = "";
            var jsPass = "";
          
            for (var i = 0; i < datos.length; i++) { //Recorre los usuarios inscriptos y verifica si coinciden mail y contraseña
                jsMail = datos[i].email;
                jsPass = datos[i].password;
      
                if (jsMail == $email && jsPass == $password ) { // Si encuentra al usuario

                    $('#emailLogin').css({'border':''});
                    $('#passwordLogin').css({'border':''});
                    $('#loginFailed').css({'display':'none'});

                    var user = datos[i];
                    var userEmail = user.email;
                    var userName = user.firstname;
                    var userId = user.id;
                    sessionStorage.setItem("email_usuario", userEmail);
                    sessionStorage.setItem("nombre_usuario", userName);
                    sessionStorage.setItem("id_usuario", userId);

                    user_login();
                }
            }
            if(datos.length == 0){ // Si no encuentra al usuario
                $('#emailLogin').css({'border':'2px solid red'});
                $('#passwordLogin').css({'border':'2px solid red'});
                $('#loginFailed').css({'display':'block'});
            }
        }
        function user_login(){
            $('#loginShow').removeClass('open'); // Remueve la clase .open al div de login para que se oculte
            $('#close-login').removeClass('open'); // Remueve la clase .open al div de cerrado para que se oculte
            $("body").css("overflow", "auto"); // Mostramos las barras de scroll de la página
            $('#formulario-login')[0].reset(); // Reseteamos los valores del formulario
            $('#shopping-cart').css("display", "block"); // Mostramos el carrito
            // Mostramos el div del usuario logeado
            var nombre = sessionStorage.getItem("nombre_usuario");
            $('.register, .login, #register').css('display', 'none'); // Oculto las formas existentes para registrarse y logearse

            var $div = $('<div>').appendTo('header');
            $div.css({float: "right", margin: "15px 45px 0 0"});

            var $logo = $('<span>').appendTo($div);
            $logo.addClass("logo-usuario");
            $logo.css({fontSize: "25px", marginRight: "15px"});

            var $icono = $('<i>');
            $icono.addClass("fa fa-user-circle");
            $logo.wrapInner($icono);

            var $nombre = $('<span>').appendTo($div);
            $nombre.text(nombre).css({fontWeight: "bold"});
        }
    }
});  