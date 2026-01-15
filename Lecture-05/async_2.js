function promiseTimeout(ms){
    return new Promise((resole,reject)=>{
        setTimeout(resole, ms);
    })
}

async function longRuningOperation() {
    return 42;
    
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(2000)
    const respone = await longRuningOperation();
    console.log(respone);
    console.log("Stop!!");

}
console.log("Before run()");
run();
console.log("After run()");