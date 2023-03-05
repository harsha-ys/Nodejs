const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const adminRouter = express.Router();

// /admin/add-product => get
adminRouter.get("/add-product", (req, res, next)=>{ //.get() match the url exactly
    console.log("add-product Middleware");
    //res.send('<form action = "/admin/product" method = "POST" ><input type="text" name="product"><button type="submit">ADD this product</button></form>');
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product' , {title : 'Add Product'});
});


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