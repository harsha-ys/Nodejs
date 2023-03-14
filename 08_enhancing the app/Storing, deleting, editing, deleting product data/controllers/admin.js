module.exports.getAddProduct = (req, res, next)=>{ //.get() match the url exactly
    console.log("add-product Middleware");
    res.render('admin/add-product' , 
    {
        title : 'Add Product', 
        act : 'add-product',
        path: '/admin/add-products',
        productCSS: true,
        formsCSS: true
    });
}

const product = require('../models/products');

module.exports.getProducts = (req, res, next)=>{ //.get() match the url exactly
    console.log("add-product Middleware");
    product.fetchAll(products=>{
        res.render('admin/product-list' , 
        {
            prods: products,
            title : 'Products', 
            act : 'add-product',
            path: '/admin/products',
            productCSS: true,
            formsCSS: true
        });     
    });

}



module.exports.postAddProduct=(req, res, next)=>{ // using app.post, only triggered for post requests
    console.log("product Middleware");
    const newproduct = new product(req.body.title, req.body.imgURL, req.body.description, req.body.price);
    newproduct.add();
    res.redirect("/");
}