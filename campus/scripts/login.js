function reloadCaptcha() {
    var obj = document.getElementById('captcha');
    var date = new Date();
    obj.src = 'imageCaptcha?cType=sis&v=' + date.getTime();
    return false;
}

function toggle(type) {
    switch (type) {
        case 'username':

            var t = $('.userNameToggle').html();
            if (t === "Forgot Username?") {
                $('#usernamebox').show();
                $('.userNameToggle').html("Hide");
                $('#helpbox').hide();
                $('.helpToggle').html("Help");
                $('#passwordbox').hide();
                $('.passwordToggle').html("Forgot Password?");

            } else if (t === "Hide") {
                $('#usernamebox').hide();
                $('.userNameToggle').html("Forgot Username?");
            }
            break;

        case 'password':

            var t = $('.passwordToggle').html();
            if (t === "Forgot Password?") {
                $('#passwordbox').show();
                $('.passwordToggle').html("Hide");
                $('#usernamebox').hide();
                $('#helpbox').hide();
                $('.helpToggle').html("Help");
                $('.userNameToggle').html("Forgot Username?");
            } else if (t === "Hide") {
                $('#passwordbox').hide();
                $('.passwordToggle').html("Forgot Password?");
            }
            break;

        case 'problems':

            var t = $('.helpToggle').html();
            if (t === "Help") {
                $('#helpbox').show();
                $('.helpToggle').html("Hide");
                $('#help').html();
                $('#passwordbox').hide();
                $('.passwordToggle').html("Forgot Password?");
                $('#usernamebox').hide();
                $('.userNameToggle').html("Forgot Username?");
            } else if (t === "Hide") {
                $('#helpbox').hide();
                $('.helpToggle').html("Help");
            }
            break;

        default:
            break;
    }
}

