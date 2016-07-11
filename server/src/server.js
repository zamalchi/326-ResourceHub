// Implement your server in this file.
// We should be able to run your server with node src/server.js
var express = require('express');
var database = require('./database');
var app = express();
var readDocument = database.readDocument;
var addDocument = database.addDocument;
var writeDocument = database.writeDocument;
var bodyParser = require('body-parser');

// Serve up HTML, CSS, JavaScript
app.use(express.static('../client/build'));

app.post('/resetdb', function(req, res) {
  console.log("Resetting database...");
  // This is a debug route, so don't do any validation.
  database.resetDatabase();
  // res.send() sends an empty response with status code 200
  res.send();
});

function getClass(classId) {
  var className = readDocument('classes', classId);
  return className;
}

app.get('/class/:classid' , function(req, res) {
  var classId = req.params.classid;
  res.send(getClass(classId));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
