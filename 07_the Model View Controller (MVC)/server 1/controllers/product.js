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