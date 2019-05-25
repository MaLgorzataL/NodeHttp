var fs = require('fs'); 
var http = require('http'); //Inicjacja serwera HTTP

var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        response.write('<h1>Zapraszam!</h1><br><img src="https://cdn.pixabay.com/photo/2017/03/15/10/57/bridge-2145846__340.jpg" alt="Zgoda">');
        response.end();
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Nie ten adres!</h1><br><img src="https://cdn.pixabay.com/photo/2012/04/28/18/19/area-43861__340.png" alt="Odmowa">');
            response.end();
    }

});
server.listen(9000);
