const express = require('express');
const admin  = require('./adminData');



const users = express.Router();

users.use((req, res, next)=>{
    res.render('users',{
        names: admin.names,
        title: 'Users',
        activeUsers : true,
        activeAddName : false    
    });
});

module.exports = users;

