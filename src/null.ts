//Null
let value:string | undefined | null = null;
value = "Hello";
console.log(value);
value = undefined;
console.log(value)

//Optional Chaining
interface House{
    sqft: number;
    yard?: {
        sqft:number;
    }
}

function  printYardSize(house:House){
    const yardSize = house.yard?.sqft;
    if(yardSize === undefined){
        console.log("No yard");
    }
    else{
        console.log(`Yard is ${yardSize} sqft`);
    }
}
let home:House = {
    sqft:500
};
printYardSize(home);