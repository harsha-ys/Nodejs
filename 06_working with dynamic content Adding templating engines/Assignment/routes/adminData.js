const express = require('express');

const adminData = express.Router();


adminData.get('/', (req, res, next)=>{
    res.render('add-name', {
        title: 'Add Names',
        activeUsers : false,
        activeAddName : true
    })

});

const names=[];

adminData.post('/', (req, res, next)=>{
    names.push({name:req.body.name });
    console.log(names);
    res.redirect('/users');
});

module.exports.routes = adminData;
module.exports.names = names;