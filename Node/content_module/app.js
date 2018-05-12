
const http = require('http');
const   fs = require('fs');

const static_contents = require('./modules/module.js')();


server = http.createServer(function (request, response){
    static_contents.handle(request, response);  //this will serve all static files automatically
});
server.listen(8000);
console.log("Running in localhost at port 8000");
