/*
function clearForm() {
    var time = 500;

    function loop( input ) {

        var control_val = $( input ).val();

        control_val = control_val.substr( 0, control_val.length - 1 );
        $( input ).val( control_val );

        if ( control_val.length > 0 ) {

            setTimeout( loop( input ), time);

        }
    }

    // $form_controls = $(".form-input").each(function(i, input) {
    //     loop(i, input)
    // });

    $form_controls = $(".form-input");

    loop($form_controls[0]);
}
*/

var done = false;
var status = null;

$(function () {

    $("#submitbtn").click(function (event) {
        
        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var phone = $("#phone-input").val();
        var company = $("#company-input").val();
        var message = $("#message-input").val();

        $.ajax({
            type: "POST",
            url: 'http://httpbin.org/post',
            // url: 'http://cake.turpialdos.webfactional.com/email/send.php',
            beforeSend: function () {
                $("#submit").html("ENVIANDO");
                $("#dot").addClass("saving");

                clearForm();
            },
            data: {
                name: name,
                email: email,
                phone: phone,
                company: company,
                message: message
            },
            success: function (data, textStatus, jqXHR) {
                status = 'success';

                if (done == true) {
                    $("#submit").html("");
                    $("#dot").removeClass("saving");
                    $("#check").addClass("saving");
                } else {
                    done = true;
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                status = 'error';

                if (done == true) {
                    $("#submit").html("");
                    $("#dot").removeClass("saving");
                    $("#error").addClass("saving");
                } else {
                    done = true;
                }

            },
            complete: function (jqXHR, textStatus) {
                console.log('completed');
                setTimeout(() => {
                    $("#submit").html("ENVIAR");
                    $("#check").removeClass("saving");
                    $("#error").removeClass("saving");
                }, 1000);
            }
        });
        event.preventDefault();

    })
});

function clearForm() {
    var time = 50;

    /* clear name value */
    !function clearName() {

        var c_name = $("#name-input").val();
        c_name = c_name.substr(0, c_name.length - 1);
        $("#name-input").val(c_name);

        if (c_name.length > 0) {
            setTimeout(clearName, time);
        } else {

            /* clear phone value */
            !function clearPhone() {

                var c_phone = $("#phone-input").val();
                c_phone = c_phone.substr(0, c_phone.length - 1);
                $("#phone-input").val(c_phone);

                if (c_phone.length > 0) {
                    setTimeout(clearPhone, time);
                } else {

                    /* clear email value */
                    !function clearEmail() {

                        var c_email = $("#email-input").val();
                        c_email = c_email.substr(0, c_email.length - 1);
                        $("#email-input").val(c_email);

                        if (c_email.length > 0) {
                            setTimeout(clearEmail, time);
                        } else {

                            /* clear company value */
                            !function clearCompany() {

                                var c_company = $("#company-input").val();
                                c_company = c_company.substr(0, c_company.length - 1);
                                $("#company-input").val(c_company);

                                if (c_company.length > 0) {
                                    setTimeout(clearCompany, time);
                                } else {

                                    /* clear message value */
                                    !function clearMessage() {

                                        var c_message = $("#message-input").val();
                                        c_message = c_message.substr(0, c_message.length - 1);
                                        $("#message-input").val(c_message);

                                        if (c_message.length > 0) {
                                            setTimeout(clearMessage, time);
                                        } else {
                                            if (done == false) {
                                                done = true;
                                            } else {


                                                if (status == null) {
                                                    done = true;

                                                } else if (status == 'success') {
                                                    if (done == true) {
                                                        $("#submit").html("");
                                                        $("#dot").removeClass("saving");
                                                        $("#check").addClass("saving");
                                                    } else {
                                                        done = true;
                                                    }

                                                } else if (status == 'error') {
                                                    if (done == true) {
                                                        $("#submit").html("");
                                                        $("#dot").removeClass("saving");
                                                        $("#error").addClass("saving");
                                                    } else {
                                                        done = true;
                                                    }
                                                }


                                            }
                                        };
                                    }();

                                };
                            }();

                        };
                    }();

                };
            }();

        };
    }();
};

