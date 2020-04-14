//basic server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    // process.exit();     // hard exit event loop

});

server.listen(3000);
