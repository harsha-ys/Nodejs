// sending a response for the request
//send html file in which a form is existed and after submit it will does a post request to the serever
//post request is sent to /message api and it will redirect it to the localhost
//read the data from the post request
const http = require("http");

const app = require("express");

app.use((req, res, next)=>{
    console.log("first Middleware");
});

const server = http.createServer(hd.handler);

server.listen(3000);