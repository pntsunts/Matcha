const http = require('http');
const host = 'localhost';
const port = 8080;
const fileSystem = require('fs');

fileSystem.readFile('index.html', (err, html) =>{
    if (err)
    {
        throw err;
    }
    var server = http.createServer((req, res) =>{
        res.writeHead(200, {"Content-type" : "text/html"});
        res.write(html);
        res.end();
    });
    server.listen(port, host, () =>{
        console.log(`Server running at http://${host}:${port}`);
    })
});