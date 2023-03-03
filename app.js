// server creation
 
const http = require('http');

// function rqListener(req, res) {}

const server = http.createServer((req, res) => {
    console.log(req);
    console.log('Yansh');
})

server.listen(4000);