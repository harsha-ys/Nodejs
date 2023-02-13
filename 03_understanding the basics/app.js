const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("request is caught");
    console.log(req);
    process.exit();// stop the server
});

server.listen(3000);