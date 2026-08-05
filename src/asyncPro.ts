//TypeScript Async Programming
//callbacks
function greet(callback:()=> void){
    console.log("Hello")
    callback();
}
greet(function(){
    console.log("Welcome");
})

//promises
const promise = new Promise<string>((resolve,reject)=>{
    resolve("Success");
});
promise.then((result)=>{
    console.log(result);
})

//Promise Type
function getName(): Promise<string> {
    return Promise.resolve("John");
}
function getAge():Promise<number>{
    return Promise.resolve(22);
}







