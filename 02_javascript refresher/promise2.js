function promise2(){
    let userLeft = false;
    let userWatchTheMatch = true;
    return new Promise( (resolve, reject)=>{ 
        if (userLeft) reject({name : "userleft" , message : ":("});
        else if (userWatchTheMatch) reject({name : "user watching the match" , message : ":( ha ha ha"});
        else resolve("Thumbs up and subscribe");
    })
};

promise2().then( message=>{console.log(message)}).catch( object => { console.log(object.name +" "+ object.message) });
console.log("before promise resolve");