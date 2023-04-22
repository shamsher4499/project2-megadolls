$.validator.addMethod("extension",function(a,b,c){
    return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g",this.optional(b)||a.match(new RegExp("\\.("+c+")$","i"))},
    $.validator.format("Only Accept image type png, jpg, jpeg"))

$.validator.addMethod("noSpace", function(value, element) { 
    return !value.startsWith(" ") && value != ""; 
}, "No space please and don't leave it empty")

$("#myForm").validate({
        rules: {
            name: {
                required: true,
                maxlength: 30,
                noSpace: true,
            },
            subcategoryName: {
                required: true,
                maxlength: 55,
                noSpace: true,
            },
            priority: {
                digits: true,
                maxlength: 3
            },
            thumbnail_image: {
                extension: true
            },
            banner_image: {
                extension: true
            },
            og_image: {
                extension: true
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });