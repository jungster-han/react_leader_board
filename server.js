var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;
//just to serve the page
app.use(express.static(path.join(__dirname + '/app')))


app.listen(port,() => console.log('Listening on port: ' + port))
