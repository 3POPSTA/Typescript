//Bascis function 
// function greet(name:string){
//     console.log(`Hello ${name}`);
// }

// function message(userName:(name:string)=>void){
//     userName("Love");
// }
// message(greet);

//=======================================================================================================
// function sendMessage(sender:string,reciever:string,message:string,send:(result:string)=>void){
//     const result = `
//         Sender:${sender},
//         Recipient:${reciever},
//         Message:${message}
//     `
//     send(result)
// }

// sendMessage("LOVE","MIA","Hi how are you",(send)=>{
//     console.log(send)
// })
//=======================================================================================================
// function message(name:string,greetings:(greeting:string)=>void){
//     const greet = `Hello ${name}`;
//     greetings(greet);
// }
// message("Love",(greet)=>{
//     console.log(greet);
// })
//=======================================================================================================
const greet = function (){
    console.log("Hello");
}
function execute(fn:()=> void){
    fn();
}
execute(greet);