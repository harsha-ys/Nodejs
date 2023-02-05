const person = {
    name: "yoshith",
    age : 27
}
coppied_obj = {...person};
console.log(coppied_obj);

hobbies = ["drawing", "singing", "programming"];
coppiedarray = [...hobbies];
console.log(coppiedarray);

const toarray = (...args)=>{
    return args;
}
console.log(toarray(1,2,3,4));