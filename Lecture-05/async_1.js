function promiseTimeout(ms){
    return new Promise((resole,reject)=>{
        setTimeout(resole, ms);
    })
}

async function  run() {
    console.log("Start!!");
    await promiseTimeout(2000)
    console.log("stop!!")
}

console.log("Before run()");
run();
console.log("After run()");