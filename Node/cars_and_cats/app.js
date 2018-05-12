var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cars/smartest_car.jpg') {
        fs.readFile('./images/smartest_car.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/cars/heel_car.jpg') {
        fs.readFile('./images/heel_car.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-Type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/cats/magic.jpeg") {
        fs.readFile('./images/magic.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/cats/me.jpg") {
        fs.readFile('./images/me.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('./views/dojos.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('Requested URL is not available!');
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077");
