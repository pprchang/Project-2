$(document).ready(function() {

  // Verify the JS file is connected to HTML via inspect
  console.log("connected");

  //===========================================================
  // Import API key
  //===========================================================
  let keyInfo = require("public/js/keys.js");
  let apiKey = keyInfo.key
  


  //============================================================
  // Submit button (for youtube search bar)
  //============================================================

  $("#submit").on("click", function(event) {
    event.preventDefault();

    // Assign 'searchTerm' the value of the search bar input
    let searchTerm = $('#search').val();

    // Call function 'youtubeGO' and pass in 'searchTerm'
    youtubeGO(searchTerm);

    // Post newSearch to 
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
      // Youtube API search query (snippet, max results, order, searchterm [ q = newSearch ], & API KEY [ try to hide key ] )
      let queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=" + newSearch + "&key=" + apiKey + "";
  
      // AJAX call
      $.ajax({
          url: queryURL,
          method: 'GET'
      }).then(function(response) {

          // Log response in case of need to div into response object
          console.log(response);
          // First video in response array
          let video1 = response.items[0].id.videoId;

          // Assign video to <iframe id="player"> (ex of iframe: '<iframe id="player" type="text/html" width="640" height="390" src="" frameborder="0" allow="encrypted-media"></iframe> )
          $('#player').attr("src", "https://www.youtube.com/embed/" + video1 +"?enablejsapi=1");
  
  
      }) // END OF 'AJAX' method / promise

  }; // END OF 'youtubeGO' function


  //==========================================================
  // Insert add. functions and event listeners below ~~~~~
  //==========================================================
  
}); // END OF '$(document).ready' function
