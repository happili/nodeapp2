const http = require('http');

const server = http.createServer((req, res) => {

    res.write("Welcome to Node app 😎 ");
    res.end();
});

server.listen(3000);

/*

OS Linux
NodeJS Software/CLI
Port 3000
index.js

//

execute node index.js

//

*/