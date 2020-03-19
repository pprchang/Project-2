// Make sure to install all appropriate packages 

const apiLog = require("../public/js/searchLog.js");

//===================================================================================
// API Routes (as an exported module)
//===================================================================================

module.exports = function(app) {

    // 'Get' log information (data)
    app.get("/api/search_log", function(req, res) {
        return res.json(apiLog);
    });

    // 'Post' newSearch to log (data)
    app.post("/api/search_log", function(req, res) {

        // Object construction will have to be configured on html script or separate JS file (location = ../public/js/index.js [ LINE 27-29] )
        let newSearch = req.body;

        // Console.log newSearch data in terminal
        console.log("Posting to api: " + JSON.stringify(newSearch));

        // Return the newSearch data so it can be console.logged in browser
        res.json(newSearch)

        //When all is said and done push newSearch object to apiLog (log) array to log searches
        apiLog.push(newSearch);
        
    }); // END OF 'post' function.

}; // END OF 'module'.
