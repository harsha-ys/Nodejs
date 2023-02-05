const person = {
    name : "yoshith",
    age : 27,
    greet:function(){
        console.log(this.name);
    }

}
console.log(person);
person.greet();

const person2 = {
    name : "yoshith2",
    age : 27,
    greet(){
        console.log(this.name);
    }

}
console.log(person2);
person2.greet();