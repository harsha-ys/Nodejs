const fs = require("fs");


const requestHandler = (req, res)=> {
    //console.log("request is caught");
    //console.log(req.url, req.method, req.headers) ;
    //process.exit();// stop the server
    const method = req.method;
    if(req.url === "/"){

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

            body.push(chunk);
        });

        return req.on('end', ()=>{ //due to return lines from 46 will not be executed
    
            const BUFFER = Buffer.concat(body).toString();
            const message =  BUFFER.split("=")[1];
            fs.writeFile("message.txt", message, err=>{ // write to the file asynchronously
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
            

        });
        
    }
    res.setHeader("Content-Type", "text/html"); // these below lines will be executed before the lines 39 -41
    res.write("<html>");
    res.write("<head><title>My first Page</title></head>");
    res.write("<body><h1>Response from NOdejs serevr</h1></body>");
    res.write("<html>");
    res.end();
};

module.exports.handler = requestHandler;
module.exports.text = "this handle the request";

/*module.exports = {
    handler : requestHandler,
    text : "this handle the request"
};*/