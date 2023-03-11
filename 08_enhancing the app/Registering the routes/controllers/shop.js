const product = require('../models/products');

module.exports.getIndex=(req, res, next)=>{
    console.log("shop Middleware");
    product.fetchAll((products)=>{
        res.render('shop/product-list', 
        {
            prods: products, 
            title :"Shop", 
            act:'shop', 
            path:'/',
            productCSS: true        
        });
    });
    
}


module.exports.getProducts=(req, res, next)=>{
    console.log("shop Middleware");
    product.fetchAll((products)=>{
        res.render('shop/product-list', 
        {
            prods: products, 
            title :"Shop", 
            act:'shop', 
            path:'/',
            productCSS: true        
        });
    });
    
}

module.exports.getCart=(req, res, next)=>{
    console.log("shop Middleware");
    product.fetchAll((products)=>{
        res.render('shop/product-list', 
        {
            prods: products, 
            title :"Shop", 
            act:'shop', 
            path:'/',
            productCSS: true        
        });
    });
    
}


module.exports.getCheckout=(req, res, next)=>{
    console.log("shop Middleware");
    product.fetchAll((products)=>{
        res.render('shop/product-list', 
        {
            prods: products, 
            title :"Shop", 
            act:'shop', 
            path:'/',
            productCSS: true        
        });
    });
    
}
