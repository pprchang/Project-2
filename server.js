//====================================================================
// Dependencies.
//====================================================================

const express = require('express');

//=====================================================================
// Set up express.
//=====================================================================

var app = express();
var PORT = process.env.PORT || 8080;

// may need to modify line 15 file path ('app/public')
app.use(express.static('./public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//=====================================================================
// Routes.
//=====================================================================

// Routing should be ok if we are using similar file structure (similar to FF HW)
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

//=====================================================================
//Starts the server to begin listening.
//=====================================================================

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
