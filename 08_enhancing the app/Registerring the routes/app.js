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
//npm install --save express-handlebars@3.0  

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//const expressHbs =  require('express-handlebars');

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");
//const rootDir = require("./util/path");
const error = require('./controllers/error');

const app = express();

/*app.engine('hbs', expressHbs.engine(
    {extname: "hbs", 
    defaultLayout : 'main-layout', 
    layoutsDir : path.join(__dirname, "views", "layouts")
    }));
*/
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views');// wheere to find dynamic pug templates

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/admin', adminData.routes);//filtering paths
app.use(shopRouter);
app.use(error.get404);

app.listen(3000);