let promise1 = new Promise((resolve, reject)=>{
    let a= 1+2;
    if (a==2){
        resolve("Done");
    }else{
        reject("failed");
    }

});

promise1.then((message)=>{
    console.log("This is inside the then and message is "+ message);
}).catch( (message)=>{
    console.log("This is inside the catch and message is " + message);
} );

var c= 5;
var c="before promise";
console.log(c);