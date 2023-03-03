// server creation
 
const http = require('http');

// function rqListener(req, res) {}

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // console.log('Yansh');
    // process.exit();
    const url = req.url;
    if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<bodey><h1>Welcome home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<bodey><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<bodey><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<bodey><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(4000);