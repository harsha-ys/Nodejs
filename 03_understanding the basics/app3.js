// sending a response for the request
const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("request is caught");
    //console.log(req.url, req.method, req.headers) ;
    //process.exit();// stop the server
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body><h1>Response from NOdejs serevr</h1></body>");
    res.write("<html>");
    res.end();
});

server.listen(3000);