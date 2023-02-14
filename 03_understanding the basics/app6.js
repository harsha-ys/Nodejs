// sending a response for the request
//send html file in which a form is existed and after submit it will does a post request to the serever
//post request is sent to /message api and it will redirect it to the localhost
//read the data from the post request
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    //console.log("request is caught");
    //console.log(req.url, req.method, req.headers) ;
    //process.exit();// stop the server
    const method = req.method;
    if(req.url === "/"){
        console.log("////////");
        res.write("<html>");
        res.write("<head><title>Enter name</title></head>");
        res.write('<body><form action = "/message" method="POST"><input type = "text" name="message"><button type="submit">Send</button></form></body>');
        res.write("<html>");
        return res.end();
    }
    if(req.url === "/message" && method === "POST") {
        console.log("will be redirected");
        const body=[];
        req.on('data', (chunk)=>{
            //console.log("ccccccccccccccccc");
            //console.log(chunk);
            body.push(chunk);
        });

        req.on('end', ()=>{
            //console.log("end");
            const BUFFER = Buffer.concat(body).toString();
            //console.log(BUFFER);
            //for(const i of body) console.log(i);
            //console.log(body.length);
            const message =  BUFFER.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });
        
        res.statusCode = 302;
        res.setHeader("Location", "/");
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