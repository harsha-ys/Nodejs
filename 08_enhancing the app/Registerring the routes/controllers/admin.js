module.exports.getAddProduct = (req, res, next)=>{ //.get() match the url exactly
    console.log("add-product Middleware");
    res.render('admin/add-product' , 
    {
        title : 'Add Product', 
        act : 'add-product',
        path:'admin/add-product',
        productCSS: true,
        formsCSS: true
    });
}

const product = require('../models/products');

module.exports.postAddProduct=(req, res, next)=>{ // using app.post, only triggered for post requests
    console.log("product Middleware");
    const newproduct = new product(req.body.title);
    newproduct.add();
    res.redirect("/");
}