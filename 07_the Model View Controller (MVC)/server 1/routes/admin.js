const express = require("express");
const productControllers = require('../controllers/product');

const adminRouter = express.Router();

// /admin/add-product => get
adminRouter.get("/add-product", productControllers.getAddProduct);

// /admin/add-product => post
adminRouter.post("/add-product", productControllers.postAddProduct);

module.exports.routes = adminRouter