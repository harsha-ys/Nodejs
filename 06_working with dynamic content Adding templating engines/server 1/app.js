// sending a response for the request
//send html file in which a form is existed and after submit it will does a post request to the serever
//post request is sent to /message api and it will redirect it to the localhost
//read the data from the post request
// npm install --save body-parser

//"restart": true,
//"runtimeExecutable": "nodemon",
//"console": "integratedTerminal"   in configuration file

//template engines
// npm install --save ejs pug express-handlebars

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");
const rootDir = require("./util/path");

const app = express();

app.set('view engine', 'pug');
app.set('views',__dirname+'/views');// wheere to find dynamic pug templates

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminData.routes);//filtering paths
app.use(shopRouter);
app.use((req, res, next)=>{
    //res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
    res.status(404).render('404', {title: 'Page Not Found'});
});

app.listen(3000);