// $(document).ready(function () {
    $('#loader').hide();
    // $('#send-mail').on('click', function () {
    //     $('#loader').show()
    // })

    $.validator.addMethod(
        /* The value you can use inside the email object in the validator. */
        "regex",

        /* The function that tests a given string against a given regEx. */
        function (value, element, regexp) {
            /* Check if the value is truthy (avoid null.constructor) & if it's not a RegEx. (Edited: regex --> regexp)*/
            if (regexp && regexp.constructor != RegExp) {
                /* Create a new regular expression using the regex argument. */
                regexp = new RegExp(regexp);
            }

            /* Check whether the argument is global and, if so set its last index to 0. */
            else if (regexp.global) regexp.lastIndex = 0;

            /* Return whether the element is optional or the result of the validation. */
            return this.optional(element) || regexp.test(value);
        }, "Please enter a valid email address"
    );
    
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                maxlength: 55
            },
            email: {
                required: true,
                email: true,
                regex: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 7,
                maxlength: 15
            },
        },
        submitHandler: function (form) {
            $('#loader').show() 
            form.submit();
        }
    });
// })