const express =  require("express");
const path = require("path");

const shopRouter = express.Router();


shopRouter.get("/", (req, res, next)=>{
    console.log("last Middleware");
    res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
    //res.send("<h1>Hello This is from Express Midlleware</h1>");
});


module.exports = shopRouter;