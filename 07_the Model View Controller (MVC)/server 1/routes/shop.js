const express =  require("express");
const productControllers = require('../controllers/product');

const shopRouter = express.Router();


shopRouter.get("/", productControllers.getShop);


module.exports = shopRouter;