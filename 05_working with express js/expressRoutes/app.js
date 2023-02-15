// sending a response for the request
//send html file in which a form is existed and after submit it will does a post request to the serever
//post request is sent to /message api and it will redirect it to the localhost
//read the data from the post request
// npm install --save body-parser

//"restart": true,
//"runtimeExecutable": "nodemon",
//"console": "integratedTerminal"   in configuration file

const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRouter);
app.use(shopRouter);
app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not Found</h1>');
});

app.listen(3000);