//Object Types
const car: {type:string,model:string, year:number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}
console.log(car.model);


const person: {name:string, age:number, location:string} = {
    name: "ACLL",
    age: 23,
    location: "ghana"
}

console.log(person.name)

//Option Property
const truck: {type:string, mileage?:number} = {
    type: "Toyata",
};
truck.mileage = 34;


//index signatures
const nameAgeMap: {[index:string]: number} = {};
nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "Fifty";
console.log(nameAgeMap.Jack)