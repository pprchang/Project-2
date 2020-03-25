//===================================================================================
// Dependencies
//===================================================================================

let axios = require("axios");
let searchLog = require("../public/js/searchLog.js");
let db = require("../models");


//===================================================================================
// Import API key (stored in .env file for security)
//===================================================================================

require("dotenv").config();
let keys = require("../keys.js");
let apiKey = keys.keyInfo.key

//===================================================================================
// API Routes (as an exported module)
//===================================================================================

module.exports = function(app) {

    // 'Get' log information (data)
    app.get("/api/search_log", function(req, res) {
        return res.json(searchLog);
    });

    // 'Post' newSearch to log (data)
    app.post("/api/search_log", function(req, res) {

        //=======================================================================================
        // Variables.
        //=======================================================================================

        let newSearch = req.body.searchTerm;
        let videoArray = [];

        // Youtube API search query (snippet, max results, order, searchTerm [ q = newSearch ], & API KEY [ try to hide key ] )
        let queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=" + newSearch + "&key=" + apiKey + "";

        // Console.log newSearch data in terminal
        console.log("Posting to api: " + newSearch);

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
                
            }).catch(function(error) {
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
                console.log("Error", error.message);
                }
                console.log(error.config);

                res.json(false);

            }); // END OF 'Axios' method / promise
        
            console.log(videoArray)

        //=================================================================
        // Add search term to "searchTerm" table in "CarNosticTracker_DB" database
        //=================================================================

        db.searchTerm.create({
            search: newSearch
        }).then(function(result) {
            console.table(result);
        });
        
    }); // END OF 'post/search_log' function.

    //====================================================================
    // "Search" Link Counter
    //====================================================================
    app.get("/api/data", function(req,res) {
        return res.json(res);
    });
    
    app.put("/api/data", function(req, res) {
        let updateSearchCounter = req.body.searchLinkCounter;

        console.log(updateSearchCounter);

        db.click.findOne(
            {
                where: {
                    id: 7
                }
            }).then(function(result) {
                console.log(result);
                
                // Grab old val and assign to variable
                let previousVal = result.dataValues.click_counter;
                // Log to verify its a number 
                console.log(previousVal)
                // Calculate new value
                let currentVal = previousVal + parseInt(updateSearchCounter);
                // Log to verify its a number 
                console.log(currentVal);

                db.click.update(
                    {
                        click_counter: currentVal
                    },
                    {
                        where: {
                            id: 7
                        }
                    }).then(function(result) {
                        console.log(result);
                    });
            });
    });

    //====================================================================
    // "Engine Warning Light" Link Counter
    //====================================================================
    app.get("/api/data2", function(req,res) {
        return res.json(res);
    });

    app.put("/api/data2", function(req, res) {
        let updateEngineWarningCounter = req.body.engineWarningCounter;

        console.log(updateEngineWarningCounter);

        db.click.findOne(
            {
                where: {
                    id: 1
                }
            }).then(function(result) {
                console.log(result);
                
                // Grab old val and assign to variable
                let previousVal = result.dataValues.click_counter;
                // Log to verify its a number 
                console.log(previousVal)
                // Calculate new value
                let currentVal = previousVal + parseInt(updateEngineWarningCounter);
                // Log to verify its a number 
                console.log(currentVal);

                db.click.update(
                    {
                        click_counter: currentVal
                    },
                    {
                        where: {
                            id: 1
                        }
                    }).then(function(result) {
                        console.log(result);
                    });
            });
    });

    //====================================================================
    // "Brake Noise" Link Counter
    //====================================================================
    app.get("/api/data3", function(req,res) {
        return res.json(res);
    });

    app.put("/api/data3", function(req, res) {
        let updateBrakeNoiseCounter = req.body.brakeNoiseCounter;

        console.log(updateBrakeNoiseCounter);

        db.click.findOne(
            {
                where: {
                    id: 2
                }
            }).then(function(result) {
                console.log(result);
                
                // Grab old val and assign to variable
                let previousVal = result.dataValues.click_counter;
                // Log to verify its a number 
                console.log(previousVal)
                // Calculate new value
                let currentVal = previousVal + parseInt(updateBrakeNoiseCounter);
                // Log to verify its a number 
                console.log(currentVal);

                db.click.update(
                    {
                        click_counter: currentVal
                    },
                    {
                        where: {
                            id: 2
                        }
                    }).then(function(result) {
                        console.log(result);
                    });
            });
    });

    //====================================================================
    // "Car Won't Start" Link Counter
    //====================================================================
    app.get("/api/data4", function(req,res) {
        return res.json(res);
    });

    app.put("/api/data4", function(req, res) {
        let updateCarWontStartCounter = req.body.carWontStartCounter;

        console.log(updateCarWontStartCounter);

        db.click.findOne(
            {
                where: {
                    id: 3
                }
            }).then(function(result) {
                console.log(result);
                
                // Grab old val and assign to variable
                let previousVal = result.dataValues.click_counter;
                // Log to verify its a number 
                console.log(previousVal)
                // Calculate new value
                let currentVal = previousVal + parseInt(updateCarWontStartCounter);
                // Log to verify its a number 
                console.log(currentVal);

                db.click.update(
                    {
                        click_counter: currentVal
                    },
                    {
                        where: {
                            id: 3
                        }
                    }).then(function(result) {
                        console.log(result);
                    });
            });
    });

    //====================================================================
    // "How to Change Tire" Link Counter
    //====================================================================
    app.get("/api/data5", function(req,res) {
        return res.json(res);
    });

    app.put("/api/data5", function(req, res) {
        let updateTireCounter = req.body.tireCounter;

        console.log(updateTireCounter);

        db.click.findOne(
            {
                where: {
                    id: 4
                }
            }).then(function(result) {
                console.log(result);
                
                // Grab old val and assign to variable
                let previousVal = result.dataValues.click_counter;
                // Log to verify its a number 
                console.log(previousVal)
                // Calculate new value
                let currentVal = previousVal + parseInt(updateTireCounter);
                // Log to verify its a number 
                console.log(currentVal);

                db.click.update(
                    {
                        click_counter: currentVal
                    },
                    {
                        where: {
                            id: 4
                        }
                    }).then(function(result) {
                        console.log(result);
                    });
            });
    });

    //====================================================================
    // "How to Change Oil" Link Counter
    //====================================================================
    app.get("/api/data6", function(req,res) {
        return res.json(res);
    });

    app.put("/api/data6", function(req, res) {
        let updateOilCounter = req.body.oilCounter;
        
        console.log(updateOilCounter);

        db.click.findOne(
            {
                where: {
                    id: 5
                }
            }).then(function(result) {
                console.log(result);
                
                // Grab old val and assign to variable
                let previousVal = result.dataValues.click_counter;
                // Log to verify its a number 
                console.log(previousVal)
                // Calculate new value
                let currentVal = previousVal + parseInt(updateOilCounter);
                // Log to verify its a number 
                console.log(currentVal);

                db.click.update(
                    {
                        click_counter: currentVal
                    },
                    {
                        where: {
                            id: 5
                        }
                    }).then(function(result) {
                        console.log(result);
                    });
            });
    });

    //====================================================================
    // "How to Jump-Start a Car" Link Counter
    //====================================================================
    app.get("/api/data7", function(req,res) {
        return res.json(res);
    });

    app.put("/api/data7", function(req, res) {
        let updateJumpCounter = req.body.jumpCounter;

        console.log(updateJumpCounter);

        db.click.findOne(
            {
                where: {
                    id: 6
                }
            }).then(function(result) {
                console.log(result);
                
                // Grab old val and assign to variable
                let previousVal = result.dataValues.click_counter; 
                // Log to verify its a number 
                console.log(previousVal);
                // Calculate new value
                let currentVal = previousVal + parseInt(updateJumpCounter);
                // Log to verify its a number 
                console.log(currentVal);

                db.click.update(
                    {
                        click_counter: currentVal
                    },
                    {
                        where: {
                            id: 6
                        }
                    }).then(function(result) {
                        console.log(result);
                    });
            })

    });




}; // END OF 'module'.
