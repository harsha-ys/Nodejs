function testcallback( callback, errorcallback ){
    let userLeft = false;
    let userWatchTheMatch = true;

    if (userLeft) errorcallback({name : "userleft" , message : ":("});
    else if (userWatchTheMatch) errorcallback({name : "user watching the match" , message : ":( ha ha ha"});
    else callback("Thumbs up and subscribe");
}

testcallback( message => { console.log(message) }, object=>{ console.log(object.name +" "+ object.message) } )