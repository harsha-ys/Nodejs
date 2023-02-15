// sending a response for the request
//send html file in which a form is existed and after submit it will does a post request to the serever
//post request is sent to /message api and it will redirect it to the localhost
//read the data from the post request
// npm install --save body-parser

const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use("/add-product", (req, res, next)=>{
    console.log("add-product Middleware");
    res.send('<form action = "/product" method = "POST" ><input type="text" name="product"><button type="submit">ADD this product</button></form>');
});

app.post("/product", (req, res, next)=>{ // using app.post, only triggered for post requests
    console.log("product Middleware");
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next)=>{
    console.log("last Middleware");
    res.send("<h1>Hello This is from Express Midlleware</h1>");
});

app.listen(3000);