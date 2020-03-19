$(document).ready(function() {

  // Verify the JS file is connected to HTML via inspect
  console.log("connected");

  //===========================================================
  // Import API key (stored in .env file for security)
  //===========================================================
  let keyInfo = require("public/js/keys.js");
  let apiKey = keyInfo.key
  require("dotenv").config();
  
  //============================================================
  // Submit button (for youtube search bar)
  //============================================================

  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Assign 'searchTerm' the value of the search bar input
    let searchTerm = $('#search').val();

    // Call function 'youtubeGO' and pass in 'searchTerm'
    youtubeGO(searchTerm);

    // Post newSearch to path (middleware)
    $.post("/api/search_log", newSearch).then(function(data) {
      // log the returned data
      console.log(data);

    });
      
  }); // END OF 'submit' button click event

  //==============================================================
  // Define-Function "youtubeGO" (to use ajax to find video)
  //==============================================================
  
  function youtubeGO(searchTerm) {

    // Redefine the 'searchTerm' argument passed in from callback as 'newSearch'
    let newSearch = searchTerm;

    // Youtube API search query (snippet, max results, order, searchTerm [ q = newSearch ], & API KEY [ try to hide key ] )
    let queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=" + newSearch + "&key=" + apiKey + "";
  
    // AJAX call
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {

      // Log response in case of need to div into response object
      console.log(response);

      // First 5 videos in response array (make duplicates for as many returned videos as we would like)
      let video1 = response.items[0].id.videoId;
      let video2 = response.items[1].id.videoId;
      let video3 = response.items[2].id.videoId;
      let video4 = response.items[3].id.videoId;
      let video5 = response.items[4].id.videoId;

      // Assign video "src" attribute to <iframe id="player1-5"> (ex of iframe: '<iframe id="player1" type="text/html" width="640" height="390" src="" frameborder="0" allow="encrypted-media"></iframe> )
      $('#player1').attr("src", "https://www.youtube.com/embed/" + video1 +"?enablejsapi=1");
      $('#player2').attr("src", "https://www.youtube.com/embed/" + video2 +"?enablejsapi=1");
      $('#player3').attr("src", "https://www.youtube.com/embed/" + video3 +"?enablejsapi=1");
      $('#player4').attr("src", "https://www.youtube.com/embed/" + video4 +"?enablejsapi=1");
      $('#player5').attr("src", "https://www.youtube.com/embed/" + video5 +"?enablejsapi=1");
          
    }) // END OF 'AJAX' method / promise

  }; // END OF 'youtubeGO' function


  //==========================================================
  // Insert add. functions and event listeners below VVV
  //==========================================================
  
}); // END OF '$(document).ready' function
