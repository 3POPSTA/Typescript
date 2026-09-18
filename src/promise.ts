//Promise
const promise = new Promise<string>((resolve,reject)=>{
    resolve("Hello")
})

function wait(): Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },3000)
        // reject("Error")
    })
}
wait().then((response)=>{
    console.log(response)
})
.catch((error)=> console.log(error))
.finally(()=> console.log("Finished"))