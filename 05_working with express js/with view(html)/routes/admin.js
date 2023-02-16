const express = require("express");
const path = require("path");

const adminRouter = express.Router();

// /admin/add-product => get
adminRouter.get("/add-product", (req, res, next)=>{ //.get() match the url exactly
    console.log("add-product Middleware");
    //res.send('<form action = "/admin/product" method = "POST" ><input type="text" name="product"><button type="submit">ADD this product</button></form>');
    res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

// /admin/add-product => post
adminRouter.post("/product", (req, res, next)=>{ // using app.post, only triggered for post requests
    console.log("product Middleware");
    console.log(req.body);
    res.redirect("/");
});

module.exports = adminRouter