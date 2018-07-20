var done = false;
var status = null;

/**
 * Send the form
 * @function $.ajax
 */

$(function () {

    $("#submitbtn").click(function (event) {

        $("#submitbtn").addClass("disabled");
        
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
                    completed();
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
                    completed();
                } else {
                    done = true;
                }

            },
            complete: function (jqXHR, textStatus) {
                console.log('completed');
            }
        });
        event.preventDefault();

    })
});

/**
 * When the form has been submitted
 * regardless of its status
 * @function completed();
 */

function completed() {
    setTimeout(() => {
        $("#submitbtn").removeClass("disabled");

        $("#submit").html("ENVIAR");
        $("#check").removeClass("saving");
        $("#error").removeClass("saving");

        done = false;
        status = null;
    }, 1000);
};

/**
 * TODO:
 * @function clearForm();
 * This next function must be improved
 * using a cleaner and readable structure.
 * Something like:
 * @function newClearForm();
 */

function clearForm() {
    var time = 25;

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

                                            /* cleaning is done */
                                            if (done == false) {
                                                done = true;

                                            } else {

                                                /* If the form has not been sent */
                                                if (status == null) {
                                                    done = true;

                                                /* If the form was sent successfully */
                                                } else if (status == 'success') {
                                                    if (done == true) {
                                                        $("#submit").html("");
                                                        $("#dot").removeClass("saving");
                                                        $("#check").addClass("saving");
                                                        completed();
                                                    } else {
                                                        done = true;
                                                    }

                                                /* if the form resulted in error */
                                                } else if (status == 'error') {
                                                    if (done == true) {
                                                        $("#submit").html("");
                                                        $("#dot").removeClass("saving");
                                                        $("#error").addClass("saving");
                                                        completed();
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

function newClearForm() {
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
};