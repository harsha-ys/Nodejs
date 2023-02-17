const express =  require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminData = require("./admin");

const shopRouter = express.Router();


shopRouter.get("/", (req, res, next)=>{
    console.log("shop Middleware");
    console.log(adminData.products);
    res.sendFile(path.join(rootDir, "views", "shop.html"));
    //res.send("<h1>Hello This is from Express Midlleware</h1>");
});


module.exports = shopRouter;