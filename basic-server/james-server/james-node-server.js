
var my_http = require("http");

my_http.createServer(function(request,response){
    console.log("We got a request!");
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.write("Here's your response, buddy!");
    response.end();
}).listen(3000);
console.log("server started...");