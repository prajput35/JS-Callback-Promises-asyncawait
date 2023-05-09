let p1 = new Promise((resolve, reject) => {
  console.log('promise pending');
  setTimeout(() => {
    console.log('resolved after 2 seconds');
    resolve(true);
  },2000);
});

p1.then((value) => {
  console.log(value);
  console.log(p1);

  let p2 = new Promise((resolve, reject) => {
   resolve('promise 2'); 
  });
  return p2;
})
.then(value => {
  console.log('we are done');
  console.log(value);

  let p3 = new Promise((resolve, reject) => {
    resolve('promise 3');
  }).then(value => {
    console.log(value);
    return new Promise((resolve, reject) => {
      resolve('goodbye')
    })
  }).then(value=>{
    console.log(value);
  })
})