$(document).ready(function() {
$("#recallTitle").hide();
$("#recallBody").hide();
$("#recallFailed").hide();

$("#recallSubmit").on('click', function(event) {
    event.preventDefault();
    $("#recallTitle").hide();
    $("#recallBody").hide();
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
        
        $.ajax({
            method: 'POST',
            url: '/api/gordonapi',
            data: {apiArray},
    
        }).then(function (data) {
            console.log(data);
            let desc = data.data[0].desc;
            if (data.data.length === 0) {
                $("#recallFailed").show();
            } else {
                let date = data.data[0].recall_date;
                let campaignNumber = data.data[0].campaign_number;
                let recallNumber = data.data[0].recall_number;
                let correctionAction = data.data[0].corrective_action;
                let consequence = data.data[0].consequence;
                $("#date").text(date);
                $("#campaignNumber").text(campaignNumber);
                $('#recallNumber').text(recallNumber);
                $('#description').text(desc);
                $('#correctionAction').text(correctionAction);
                $('#consequence').text(consequence);
                $("#recallTitle").show();
                $("#recallBody").show();
    

            }

        })


    };


});

});