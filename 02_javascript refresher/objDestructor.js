const person = {
    name : "yoshith", age : 27, sex:"male"
}

const printName=({name})=>{
    console.log(name);
}

printName(person);
const {name, age} = person;
console.log(name, age);

hobbies = ["a", "b", "c"];
const [A, B] = hobbies;
console.log(A,B);
