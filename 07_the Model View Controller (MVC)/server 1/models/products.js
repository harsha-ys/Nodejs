const products = [];

module.exports = class product{
    constructor(title){
        this.title = title;
    };
    add(){
        products.push(this);
    };
    static fetchAll(){
        return products;
    };
};