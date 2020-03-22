//===================================================================================
// Dependencies
//===================================================================================

let axios = require('axios');
let searchLog = require('../public/js/searchLog.js');

//===================================================================================
// Import API key (stored in .env file for security)
//===================================================================================

require('dotenv').config();
let keys = require('../keys.js');
let apiKey = keys.keyInfo.key;

//===================================================================================
// API Routes (as an exported module)
//===================================================================================

module.exports = function(app) {
  // 'Get' log information (data)
  app.get('/api/search_log', function(req, res) {
    return res.json(searchLog);
  });

  // 'Post' newSearch to log (data)
  app.post('/api/search_log', function(req, res) {
    //=======================================================================================
    // Variables.
    //=======================================================================================

    let newSearch = req.body.searchTerm;
    let videoArray = [];

    // Youtube API search query (snippet, max results, order, searchTerm [ q = newSearch ], & API KEY [ try to hide key ] )
    let queryURL =
      'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=' +
      newSearch +
      '&key=' +
      apiKey +
      '';

    // Console.log newSearch data in terminal
    console.log('Posting to api: ' + newSearch);

    //=======================================================================================
    // Push 'searchTerm' to searchLog array.
    //=======================================================================================

    searchLog.push(JSON.stringify(newSearch));

    //=======================================================================================
    // USE AXIOS npm to search the YOUTUBE API and return the data.
    //=======================================================================================

    axios
      .get(queryURL)
      .then(function(response) {
        // Log response in case of need to dive into response object
        console.log(response.data.items);

        // First 6 video id's in response array.
        let video1 = response.data.items[0].id.videoId;
        let video2 = response.data.items[1].id.videoId;
        let video3 = response.data.items[2].id.videoId;
        let video4 = response.data.items[3].id.videoId;
        let video5 = response.data.items[4].id.videoId;
        let video6 = response.data.items[5].id.videoId;

        // Push the VIDEO ID's to videoArray.
        videoArray.push(video1, video2, video3, video4, video4, video5, video6);

        console.log(videoArray);

        // Return the videoArray.
        res.json(videoArray);
      })
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);

        res.json(false);
      }); // END OF 'AJAX' method / promise

    console.log(videoArray);
  }); // END OF 'post' function.
}; // END OF 'module'.
