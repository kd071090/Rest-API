const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        //...
    }
}

if (req.url === '/api/course') {
    //...
}
});

server.listen(3000);
