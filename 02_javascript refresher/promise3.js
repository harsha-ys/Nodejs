
const recordVideoOne = new Promise((resolve, reject) => {
    for(let i=0;i<500;i++) console.log(i);
    setTimeout(()=>{console.log("Promise 1 Time is over "), 500000});
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    for(let i=500;i<1000;i++) console.log(i);
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {
    console.log(messages)
  })