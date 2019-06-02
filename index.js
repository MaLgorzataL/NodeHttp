var fs = require('fs'); 
var http = require('http'); //Inicjacja serwera HTTP
var data = '';
var koniecObliczen = false;
var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function read(err, data) { //Czyta plik .html
            if (err) {
                throw err;
            };
            var posbegin = data.indexOf('<body>'); 
            posbegin = posbegin+6;   // Wycinamy potrzebny string usuwając znacznik <body>
            var posend = data.indexOf('</body>');
            data = data.slice(posbegin,posend);
            if (koniecObliczen === false) {
                response.write(data); 
                console.log(data);
                koniecObliczen = true;
                if (koniecObliczen === true) {
                    response.end(); 
                    console.log('Zamkniecie strumienia');
                    koniecObliczen = false;
                }; 
            } 
        }) 

        } else {
            response.statusCode = 404;
            response.write('<h1>404: Nie ten adres!</h1><br><img src="https://cdn.pixabay.com/photo/2012/04/28/18/19/area-43861__340.png" alt="Odmowa">');
            response.end();
        };
        
    });
server.listen(5000);
