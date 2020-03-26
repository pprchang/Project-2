$(document).ready(function() {

$("#recallSubmit").on('click', function() {
    let model;
    let make;
    let year;

    if ($('#model').val() === "" ) {
        $('model').addClass("is-invalid")
    }  else {
        $('model').removeClass("is-invalid")
        model = $('model').val()
    };

    if ($('#make').val() === "" ) {
        $('make').addClass("is-invalid")
    }  else {
        $('make').removeClass("is-invalid")
        make = $('make').val()
    };

    if ($('#year').val() === "" ) {
        $('year').addClass("is-invalid")
    }  else {
        $('year').removeClass("is-invalid")
        year = $('year').val()
    };

    if ($('#model').val() === "" && $('#make').val() === "" && $("#year").val() === "") {
        console.log ("Must be filled out before moving on!")
    } else {
        

    }


})
});