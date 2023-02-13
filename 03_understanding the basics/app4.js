// sending a response for the request
//send html file in which a form is existed and after submit it will does a post request to the serever
const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("request is caught");
    //console.log(req.url, req.method, req.headers) ;
    //process.exit();// stop the server
    if(req.url === "/"){
        res.write("<html>");
        res.write("<head><title>Enter name</title></head>");
        res.write('<body><form action = "/message" method="POST"><input type = "text"><button type="submit">Send</button></form></body>');
        res.write("<html>");
        return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body><h1>Response from NOdejs serevr</h1></body>");
    res.write("<html>");
    res.end();
});

server.listen(3000);