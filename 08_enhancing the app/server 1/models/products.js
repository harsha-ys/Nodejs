const products = [];
const fs = require('fs');
const path = require('path');


module.exports = class product{

    static p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

    constructor(title){
        this.title = title;
    };
    
    add(){
        product.helper(products => {
            products.push(this);

            fs.writeFile(product.p, JSON.stringify(products), (err)=>{
                console.log(err);
            });
        });
    };
    
    static fetchAll(callback){

        product.helper(callback);
    };

    static helper = callback =>{
        fs.readFile(product.p, (err, data)=>{
            if (err) callback([]);
            else callback( JSON.parse(data));
        });   
    };
};