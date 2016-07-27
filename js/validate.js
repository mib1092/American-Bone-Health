$(document).ready(function() {
    $("#calculator-form").validate({
        rules:{
            calcfild1:{
                required: true,
                number: true,
                minlength: 1,
                maxlength: 16
            },

            calcfild2:{
                required: true,
                number: true,
                minlength: 1,
                maxlength: 16
            },
            calcfild3:{
                required: true,
                number: true,
                minlength: 1,
                maxlength: 16
            },
            calcfild4:{
                required: true,
                number: true,
                minlength: 1,
                maxlength: 16
            },
            calcfild5:{
                required: true,
                minlength: 1,
                maxlength: 16
            },
            calcfild6:{
                required: true,
                email: true,
                minlength: 4,
                maxlength: 16
            }
        }
    });
});
