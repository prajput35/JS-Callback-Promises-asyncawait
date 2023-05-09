async function myFunction() {
  return "Hello return from async function without await and promise";
}

myFunction().then((value)=>console.log(value))
//-------------------------------------------------
.then(()=>console.log('-------------------------------------------------'));
  
let isOpen = true;
let order = (time) => {
  return new Promise((resolve, reject) => {
    if(isOpen){
      setTimeout(
        () => resolve('success returned from promise for await keyword'),time);
    }else{
      reject('failure');
    }
  });
}

function simpleOrder(){
  return Promise.resolve('simple promise return for await keyword');
}

test = async () =>{
  try{
    let m = await order(1000);
    console.log(m);
    
    m = await simpleOrder();
    console.log(m);

    m = await order(1000);
    console.log(m);
    
    m = await myFunction();
    console.log(m);
    return m;
  }
  catch(err){
    console.log(err);
  }
  finally{
    console.log('goodbye');
  }
}

//2 ways to call below function
//method 1
//test();

//method 2 below to hvae chaining if somthing is returned by async function
//test().then((v)=>console.log(v));

console.log('-----------------------------------------');

async function Paras(){
  let delhi = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('27 deg')
    },1000);
  });

  let bglr = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('21 deg')
    },3000);
  });

  let dw = await delhi;
  //console.log(dw);

  let bw = await bglr;
  //console.log(bw);

  //-waits for all promises to resolve and returns the array of the results. If any one promise fails, the outcome becomes an error and rest all the fulfilled promises are ignored
  const [thing1, thing2] = await Promise.all([dw, bw]);
  console.log(thing1);
  console.log(thing2);
  
  //-waits for first promise to settle and its result/error is returned
  const thing3 = await Promise.race([dw, bw]);
  console.log(thing3);

  //Promise.allSettled([[dw, bw]);
  //-waits for all the promises to settle and then returns their result as an array of object with status and value
  
  //Promise.any([dw, bw]));
  //-waits for the first promise to fulfill (& not rejected) and its result becomes the outcome. Throws aggregate error if all the promises are rejected
  
  //console.log(thing2);
  //Promise.all([dw,bw]).then(value=>console.log(value));
  return [dw,bw];
}

let p =  Paras();
//console.log(p[0]);
p.then((v) => console.log(v));

