$(document).ready(function(){ 
    $('#password2').blur(function() {
        val1 = $('#password1').val();
        val2 = $('#password2').val();
        if (val1 != val2) {
            $('#passwordsMatch').css({'display': 'block'});
            $('#password1').css({'border':'2px solid red'});
            $('#password2').css({'border':'2px solid red'});
            $(':input[type="submit"]').prop('disabled', true);
            $(':input[type="submit"]').css({'opacity':'0.4','cursor':'not-allowed'});
        } 
        else if(val1 == "" | val2 == ""){
            $(':input[type="submit"]').prop('disabled', true);
            $(':input[type="submit"]').css({'opacity':'0.4','cursor':'not-allowed'});
        }
        else{
            $('#passwordsMatch').css({'display': 'none'});
            $('#password1').css({'border':''})
            $('#password2').css({'border':''})
            if(userfound == true){
                $(':input[type="submit"]').prop('disabled', true);
                $(':input[type="submit"]').css({'opacity':'0.4','cursor':'not-allowed'});
            }
            else{
                $(':input[type="submit"]').prop('disabled', false);
                $(':input[type="submit"]').css({'opacity':'1','cursor':'pointer'});
            }
        }
    });
});