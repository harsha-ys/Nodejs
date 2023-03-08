const express = require("express");
const productControllers = require('../controllers/product');

const adminRouter = express.Router();

// /admin/add-product => get
adminRouter.get("/add-product", productControllers.getAddProduct);


const products = [];
// /admin/add-product => post
adminRouter.post("/add-product", (req, res, next)=>{ // using app.post, only triggered for post requests
    console.log("product Middleware");
    //console.log(req.body);
    products.push({title: req.body.title});
    res.redirect("/");
});

module.exports.routes = adminRouter
module.exports.products = products