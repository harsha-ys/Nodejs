const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/adminData.js');
const users = require('./routes/users.js');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use( users);
app.use( adminData.routes);

app.use((req, res, next)=>{
    res.status('404').render('404', {title: 'Page Not Found', activeUsers: false, activeAddName: false});
});

app.listen(3000);



