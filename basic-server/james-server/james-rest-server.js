var express = require('express');
var app = express();
var fs = require("fs");

// Handles requests to "...:8081/supbro" with a success message.
app.get('/supbro', function (req, res) {
console.log("Hey, the supbro endpoint was hit!");

var coolParam = req.param('imCool');
console.log('The cool param is: ' + coolParam);

if (coolParam == undefined) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("What's poppin', bro!\n");
    
} else if (coolParam === 'true') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("You sure are a cool dude!\n");
} else if (coolParam === 'false') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Ahh, I still think you're cool! :'(\n");
}
      
})

// Handles unkown requests with a custom error message.
app.use(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Uhh, do I know you?\n');

	console.log("Unknown endpoint hit.");
   });

// Start listening for incoming requests.
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at http://%s:%s", host, port);

})