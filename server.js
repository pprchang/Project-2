//====================================================================
// Dependencies.
//====================================================================

const express = require('express');

//=====================================================================
// Set up express.
//=====================================================================

var app = express();
var PORT = process.env.PORT || 8000;

// may need to modify line 15 file path ('app/public')
app.use(express.static('./public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring our models for syncing
var db = require('./models');

//=====================================================================
// Routes.
//=====================================================================

// Routing should be ok if we are using similar file structure (similar to FF HW)
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

//=====================================================================
//Starts the server to begin listening.
//=====================================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
