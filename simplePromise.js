function Test(){
    return Promise.resolve('hi');
} 

Test().then(v=>{
    console.log(v)
});

var p = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        try{
            resolve('success');
        }
        catch{
            reject('failure')
        }
    
    },1000);
})

p.then(v=>{
    console.log(v)
}).catch(e=>{
    console.log(e)
});