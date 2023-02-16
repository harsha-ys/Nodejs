const express =  require("express");

const shopRouter = express.Router();


shopRouter.get("/", (req, res, next)=>{
    console.log("last Middleware");
    res.send("<h1>Hello This is from Express Midlleware</h1>");
});


module.exports = shopRouter;