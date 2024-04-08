


var express = require('express');

var cors = require('cors'); // cors middleware
var app = express();
var fs = require('fs');

// Use the cors middleware
app.use(cors());

// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "jsondata.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data);
    });
});

// Create a server to listen at port 8081
var server = app.listen(8081, function()

{
    var host = server.address().address;
    var port = server.address().port;
    console.log("REST API demo app listening at http://%s:%s", host, port);
});
