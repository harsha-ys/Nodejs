const express = require("express");
const adminControllers = require('../controllers/product');

const adminRouter = express.Router();

// /admin/add-product => get
adminRouter.get("/add-product", adminControllers.getAddProduct);

// /admin/products => get
adminRouter.get("/products", adminControllers.getProducts);
das

// /admin/add-product => post
adminRouter.post("/add-product", adminControllers.postAddProduct);

module.exports.routes = adminRouter