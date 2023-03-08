module.exports.getAddProduct = (req, res, next)=>{ //.get() match the url exactly
    console.log("add-product Middleware");
    //res.send('<form action = "/admin/product" method = "POST" ><input type="text" name="product"><button type="submit">ADD this product</button></form>');
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render('add-product' , 
    {
        title : 'Add Product', 
        act : 'add-product',
        activeAddProduct: true,
        activeShop: false,
        productCSS: true,
        formsCSS: true
    });
}



const product = require('../models/products');
//const products = [];
module.exports.postAddProduct=(req, res, next)=>{ // using app.post, only triggered for post requests
    console.log("product Middleware");
    //console.log(req.body);
    //products.push({title: req.body.title});
    const newproduct = new product(req.body.title);
    newproduct.add();
    res.redirect("/");
}


module.exports.getShop=(req, res, next)=>{
    console.log("shop Middleware");
    console.log(product.fetchAll());
    //res.sendFile(path.join(rootDir, "views", "shop.html"));
    //res.send("<h1>Hello This is from Express Midlleware</h1>");
    res.render('shop', 
    {
        prods: product.fetchAll(), 
        title :"Shop", 
        act:'shop', 
        hasitem : product.fetchAll().length,
        activeShop: true,
        activeAddProduct: false,
        productCSS: true        
    });
}