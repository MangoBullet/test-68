const promise = new promise((resolve, reject) => {
    const res = true;
    if (res){
        resolve("Resolevd!");
    }
    else {
        reject(Error("Fatal Error"));
    }
})

promise.then(
    (res) => console.log(res),
    (err) => console.log(err),
)