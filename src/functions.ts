//function
//Return Type
function getTime(): number{
    return new Date().getTime();
}

//Void Return Type
function printHello(): void {
    console.log("Hello");
}
printHello();

//Parameters
function multiply(a:number,b:number){
    return a * b;
}

multiply(1,2);


//Optional Parameters
function add(a:number, b:number, c?: number){
    return a + b + (c || 0);
}

//Default Parameters
function pow(value:number, exponent:number = 10){
    return value ** exponent
}


//Rest Parameters
function plus(a: number,b: number, ...rest: number[]){
    return a + b + rest.reduce((p,c)=>p+c,0)
}

