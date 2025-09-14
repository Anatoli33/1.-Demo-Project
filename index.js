import http from 'http';

const port = 1337;
const serve = http.createServer((req, res) =>{
    res.writeHead(200, {
        'Content-Type': "text/plain"
        });
        res.write('Hello World!');
        res.end();
})
serve.listen(port);