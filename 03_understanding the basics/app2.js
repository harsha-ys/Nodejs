const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("request is caught");
    console.log(req.url, req.method, req.headers) ;
    //process.exit();// stop the server
});

server.listen(3000);