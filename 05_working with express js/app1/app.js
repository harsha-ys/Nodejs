// sending a response for the request
//send html file in which a form is existed and after submit it will does a post request to the serever
//post request is sent to /message api and it will redirect it to the localhost
//read the data from the post request

const express = require("express");

app = express();

app.use((req, res, next)=>{
    console.log("first Middleware");
    next();
});

app.use((req, res, next)=>{
    console.log("next Middleware");
    res.send("<h1>Hello This is from Express Midlleware</h1>");
});

app.listen(3000);