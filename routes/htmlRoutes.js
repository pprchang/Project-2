//===================================================================================
// Dependencies.
//===================================================================================

const path = require('path');

//===================================================================================
// HTML Routes (as an exported module).
//===================================================================================

module.exports = function(app) {
  // home (home.html).
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
  });

  // Search page (search.html).
  app.get('/search', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'search.html'));
  });

  // Car won't start page (carWontStart.html).
  app.get('/car_wont_start', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'carWontStart.html'));
  });

  // Brake Noise page (brakeNoise.html).
  app.get('/brake_noise', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'brakeNoise.html'));
  });

  // Change Tire page (changeOil.html).
  app.get('/change_oil', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'changeTire.html'));
  });

  // Change Oil page (changeOil.html).
  app.get('/change_oil', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'changeOil.html'));
  });

  // Contact page (contact.html).
  app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'contactUs.html'));
  });

  // Warning Lights page (engineWarning.html).
  app.get('/warning_lights', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'engineWarning.html'));
  });

  // Jump-start page (jumpStart.html).
  app.get('/jump_start', function(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'jumpStart.html'));
  });
};
