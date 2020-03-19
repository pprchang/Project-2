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

        // object construction will have to be configured on html script or separate JS file
        let newSearch = req.body;
    
        console.log("Posting to api: " + JSON.stringify(newSearch));

        res.json(newSearch)

        //When all is said and done push newSearch object to apiLog (log) array to log searches
        apiLog.push(newSearch);
        
    }); // END OF 'post' function.

}; // END OF 'module'.
