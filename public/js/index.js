$(document).ready(function() {

  //============================================================
  // Global variables
  //============================================================
  let searchLinkCounter = 0;
  let engineWarningCounter = 0;
  let brakeNoiseCounter = 0;
  let carWontStartCounter = 0;
  let tireCounter = 0;
  let oilCounter = 0;
  let jumpCounter = 0;
  let interval;

  // Verify the JS file is connected to HTML via inspect
  console.log("connected");

  //============================================================
  // Submit button (for youtube search bar).
  //============================================================

  $("#searchButton").on("click", function(event) {
    event.preventDefault();
    //============================================================
    // Assign 'searchTerm' the value of the search bar input.
    //============================================================

    let searchTerm;
    
    if($('#searchTerm').val().trim() === "" ) {
      $('#searchTerm').addClass('is-invalid');
    } else {
      searchTerm = $('#searchTerm').val().trim();
      $('#searchTerm').removeClass('is-invalid');
    
    
      //============================================================
      // Post newSearch to path (middleware).
      //============================================================

      $.post("/api/search_log", {searchTerm}).then(function(data) {

        // log the returned data
        console.log(data);

        //=========================================================
        // Assign video "src" attribute to <iframe id="player1-6">.
        //=========================================================
      
        $('#iFrame1').attr("src", "https://www.youtube.com/embed/" + data[0] +"?enablejsapi=1");
        $('#iFrame2').attr("src", "https://www.youtube.com/embed/" + data[1] +"?enablejsapi=1");
        $('#iFrame3').attr("src", "https://www.youtube.com/embed/" + data[2] +"?enablejsapi=1");
        $('#iFrame4').attr("src", "https://www.youtube.com/embed/" + data[3] +"?enablejsapi=1");
        $('#iFrame5').attr("src", "https://www.youtube.com/embed/" + data[4] +"?enablejsapi=1");
        $('#iFrame6').attr("src", "https://www.youtube.com/embed/" + data[5] +"?enablejsapi=1");
      });
   
    };

  }); // END OF 'submit' button click event

  //==========================================================
  // Insert add. functions and event listeners below VVV.
  //==========================================================

  //==========================================================
  // "Search" link event listener
  //==========================================================

  $("#searchLink").on("click", function() {
    searchLinkCounter++;

    console.log("search link works!") ;
    console.log(searchLinkCounter);
    // This is working up to this point.........

    // SEND TO BACKEND
    $.ajax({
      method: "PUT",
      url: "/api/data",
      data: {searchLinkCounter}
    }).then(function(data) {

      console.log(data);
    });

  });

  //==========================================================
  // "Engine Warning Light" link event listener
  //==========================================================

  $('#engineWarning').on('click', function() {
    engineWarningCounter++;

    console.log("engine warning light listener works!");
    console.log(engineWarningCounter);

    // SEND TO BACKEND
    $.ajax({
      method: "PUT",
      url: "/api/data2",
      data: {engineWarningCounter}
    }).then(function(data) {

      console.log(data);
    });
    
  });

  //==========================================================
  // "Brake Noise" link event listener
  //==========================================================

  $('#brakeNoise').on('click', function() {
    brakeNoiseCounter++;

    console.log("brake noise listener works!");
    console.log(brakeNoiseCounter);

    // SEND TO BACKEND
    $.ajax({
      method: "PUT",
      url: "/api/data3",
      data: {brakeNoiseCounter}
    }).then(function(data) {

      console.log(data);
    });
    
  });

  //==========================================================
  // "Car Won't Start" link event listener
  //==========================================================

  $('#carWontStart').on('click', function() {
    carWontStartCounter++;

    console.log("car won't start listener works!");
    console.log(carWontStartCounter);

    // SEND TO BACKEND
    $.ajax({
      method: "PUT",
      url: "/api/data4",
      data: {carWontStartCounter}
    }).then(function(data) {

      console.log(data);
    });
    
  });

  //==========================================================
  // "How to Change a Tire" link event listener
  //==========================================================

  $('#tire').on('click', function() {
    tireCounter++;

    console.log("tire listener works");
    console.log(tireCounter);

    // SEND TO BACKEND
    $.ajax({
      method: "PUT",
      url: "/api/data5",
      data: {tireCounter}
    }).then(function(data) {

      console.log(data);
    });
    
  });

  //==========================================================
  // "How to Change Oil" link event listener
  //==========================================================

  $('#oil').on('click', function() {
    oilCounter++;

    console.log("oil listener works");
    console.log(oilCounter);

    // SEND TO BACKEND
    $.ajax({
      method: "PUT",
      url: "/api/data6",
      data: {oilCounter}
    }).then(function(data) {

      console.log(data);
    });
    
  });

  //==========================================================
  // "How to Jump Start a Car" link event listener
  //==========================================================

  $('#jump').on('click', function() {
    jumpCounter++;

    console.log("jump listener works")
    console.log(jumpCounter);

    // SEND TO BACKEND
    $.ajax({
      method: "PUT",
      url: "/api/data7",
      data: {jumpCounter}
    }).then(function(data) {

      console.log(data);
    });
    
  });

//====================================================================
  // Clear form values on 'contactUs.html' page
  //====================================================================
  $("#formSubmit").on('click', function() {
    
    // Define function to rest contact form values after submission and clear interval.
    function resetForm () {

      // Reset values
      $("#firstName").val("");
      $('#lastName').val("");
      $("#inputEmail4").val("");
      $("#message").val("");

      // Stop setInterval (interval)
      clearInterval(interval);

    };

    // Start setInterval
    interval = setInterval(resetForm, 2000);
    

  });


  
}); // END OF '$(document).ready' function
