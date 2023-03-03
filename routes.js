const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        return fs.readFile('message.txt', {encoding: 'utf-8'}, (err, data) => {
            if(err){
                console.log(err);
            }
            console.log('data from file:',data);
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body>');
            res.write(`<p>${data}</p>`)
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        })
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            // fs.writeFileSync('message.txt', message);
            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    else if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';