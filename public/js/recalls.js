$(document).ready(function() {

$("#recallSubmit").on('click', function(event) {
    event.preventDefault();
    let model;
    let make;
    let year;
    let apiArray=[];

    if ($('#model').val() === "" ) {
        $('#model').addClass("is-invalid")
    }  else {
        $('#model').removeClass("is-invalid")
        model = $('#model').val()
    };

    if ($('#make').val() === "" ) {
        $('#make').addClass("is-invalid")
    }  else {
        $('#make').removeClass("is-invalid")
        make = $('#make').val()
    };

    if ($('#year').val() === "" ) {
        $('#year').addClass("is-invalid")
    }  else {
        $('#year').removeClass("is-invalid")
        year = $('#year').val()
    };

    if ($('#model').val() === "" && $('#make').val() === "" && $("#year").val() === "") {
        console.log ("Must be filled out before moving on!")
    } else {
        console.log("We got this far");
        apiArray.push(make, model, year);
        console.log(apiArray);
        

        
        // $.ajax({
        //     url: "http://api.carmd.com/v3.0/recall?year=" + year + "&make=" + make + "&model=" + model + "",
        //     headers: {
        //      "content-type":"application/json",
        //      "authorization":"ZDFjMzJkYzQtMGY4NC00ZDk3LTg2YWUtZWZhOTA3MDAzNjRk	",
        //      "partner-token":"81743de60d6f4f9595099de98bf3907e",
        // },
        // method:'PUT',
        // dataType: 'json',
        // success: function(data){
        //     console.log('success: ' +data);
        // }
    
        // }).then(function (data) {
        //     console.log(data);
        // })
        
        
        
        
        
        
        
        $.ajax({
            method: 'POST',
            url: '/api/gordonapi',
            data: {apiArray},
    
        }).then(function (data) {
            console.log(data);
        })





        //$.post("/api/gordonapi", {apiArray}).then(function(data) {
           // console.log(data);

        // $.ajax({
        //     url: "http://api.carmd.com/v3.0/recall?year=" + year + "&make=" + make + "&model=" + model,
        //     method: "GET"
        // }).then(function(response) {
        //     console.log(response);
        // });

       // });


    };

});

});