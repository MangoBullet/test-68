function promiseTimeout(ms){
    return new Promise((resole,reject)=>{
        setTimeout(resole, ms);
    })
}

promiseTimeout(2000)
.then(()=>{
    console.log("Done!!");
    return promiseTimeout(1000);
})
.then(()=>{
    console.log("Also done!!");
    return promiseTimeout(42);
})
.then(()=>{
    console.log("value", value);
})
.catch(()=>{
    console.log("Error!");
})

