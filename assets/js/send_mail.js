
$(function() {
    // $("#contact-form").ajaxSubmit(
    //     {
    //         type: 'post',
    //         beforeSend: function(request) {
    //             alert("hola");
    //             request.setRequestHeader("Access-Control-Allow-Origin", "*");
    //         }
    //     }
    // );

    $("#contact-form").submit(function (event) {
        $.ajax({
            type: "POST",
            url: 'http://cake.turpialdos.webfactional.com/email/send.php',
            processData: false,
            data: {
                "name-input": function(){return 'toto'},
                "email-input": function(){return "mimail@mail.com"},
                "phone-input": function(){return "987987"},
                "company-input": function(){return "polar"},
                "message-input": function(){return "epa epa"}
                // "name-input": function(){return $("").value},
                // "email-input": function(){return $("").value},
                // "phone-input": function(){return $("").value},
                // "company-input": function(){return $("").value},
                // "message-input": function(){return $("").value}
            }
        });
        event.preventDefault();
})
 });
