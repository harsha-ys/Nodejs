


module.exports.getShop=(req, res, next)=>{
    console.log("shop Middleware");
    product.fetchAll((products)=>{
        res.render('shop/product-list', 
        {
            prods: products, 
            title :"Shop", 
            act:'shop', 
            path: '/',
            productCSS: true        
        });
    });
    
}