//Turples

//simple turple
// let items: [number,boolean,string] = [1,true,"test"];
let items: [number,boolean,string];
items = [1,true,"test"];

//readonly turple
let chars: readonly [number,boolean,string];
chars = [1,true,"test"];


//named turple
const graph: [x:number, y:number] = [12,45];

//Destructing Turples

const points: [number,number] = [12,34];
const [x,y] = points;