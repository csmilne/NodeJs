//basic server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);  // request metadata
    // process.exit();     // hard exit event loop

});

server.listen(3000);
