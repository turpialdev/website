
$(function() {

    $("#contact-form").submit(function (event) {
        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var phone = $("#phone-input").val();
        var company = $("#company-input").val();
        var message = $("#message-input").val();
        $.ajax({
            type: "POST",
            url: 'http://cake.turpialdos.webfactional.com/email/send.php',
            beforeSend: function () {
                // gustavo, do your thing...
            },
            data: {
                name: name,
                email: email,
                phone: phone,
                company: company,
                message: message
            },
            success: function (data, textStatus, jqXHR) {
                // gustavo, do your thing...
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // gustavo, do your thing...
            },
            complete: function (jqXHR, textStatus) {
                // gustavo, do your thing...
            }
        });
        event.preventDefault();
    })
});
