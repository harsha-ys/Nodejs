const express =  require("express");
const shopControllers = require('../controllers/shop');

const shopRouter = express.Router();


shopRouter.get("/", shopControllers.getIndex);

shopRouter.get('/products', shopControllers.getProducts);
shopRouter.get('/cart', shopControllers.getCart);
shopRouter.get('/orders', shopControllers.getOrders);
shopRouter.get('/checkout', shopControllers.getCheckout);


module.exports = shopRouter;