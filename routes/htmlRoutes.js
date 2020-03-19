//===================================================================================
// Dependencies
//===================================================================================
const path = require("path");

//===================================================================================
// HTML Routes (as an exported module)
//===================================================================================

module.exports = function(app) {

    // NEED TO UPDATE WITH FILE NAME AND URL PATH NAME (ALL OF HUES HTML FILES)
    // home
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "home.html"));
    });
    // page 1
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });
    // page 2
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });
    // page 3
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });
    // page 4
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });
    // page 5
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });
    // page 6
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });
    // page 7
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "survey.html"));
    });


};