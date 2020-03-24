$(document).ready(function() {

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
    
    if ($('#searchTerm').val().trim() === "") {
      alert("You must enter a search term!")
    } else {
      searchTerm = $('#searchTerm').val().trim();

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

    } // END OF 'if / else' statement
    
      
  }); // END OF 'submit' button click event

  //==========================================================
  // Insert add. functions and event listeners below VVV.
  //==========================================================
  
}); // END OF '$(document).ready' function
