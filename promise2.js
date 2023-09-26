let isOpen = true;
let order = () => {
  return new Promise((resolve, reject) => {
    if(isOpen){
      resolve('success order');
    }else{
      reject('failure order');
    }
  });
};

let order2 = (time, work) => {
  return new Promise((resolve, reject) => {
    if(isOpen){
      setTimeout(()=>{
      resolve(work('success'));  
      },time)
      
    }else{
      reject('failure');
    }
  });
};

//method1

order().then((msg)=>{
  console.log('Method 1 call......')
  console.log(msg)
})
  .catch(err=>console.log(err));

//method 2

order2(2000,(msg)=>{
  console.log('\nMethod 2 call after 2 seconds......')
  console.log(msg);
})
  .catch(err=>console.log(err));

//promise chaining
//necessary to have return statement at each then before the last then

order().then(msg => {
  console.log('\nChaining method call......');
  console.log('chaining starts::',msg);
  let m = 'chaining 1 '+ msg;
  return m})
.then(msg => {
  console.log(msg);
  let m = 'chaining 2 '+ msg;
  return m})
.then(msg =>{
  console.log(msg+' end chain');
})
.then((n)=>console.log('end'))
  .then(()=>console.log('goodbye'))
  .then(()=>console.log('.'))
.catch(err => console.log(err))
.finally(()=>console.log('tata'));

//----------------------------------------

function myFunction() {
  return Promise.resolve("Hello");
}

myFunction().then((val)=>{
  console.log(val);
})