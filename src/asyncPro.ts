//Basic Async
async function getGreeting(): Promise<string> {
    return "Hello Typescript";
}

async function run(){
    const greeting = await getGreeting();
    console.log(greeting)
}


//Error Handling
// async function fetchEmployees(): Promise<string>{
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`)
//         }
//         const data = await response.json();
//         return data;
//     }
//     catch(error){
//         if(error instanceof Error){
//             console.error("Fetch Failed",error.message);
//             return error.message;
//         }
//         return "An unknown error occurred.";

//     }
// }


// async function getData(){
//     const data = await fetchEmployees();
//     console.log(data);
// }
// getData()

//create a promise
async function fetchUsers(): Promise<User> {
//fetch data from the API endpoint
    const userData = await fetch("https://dummyjson.com/users/3")
//read the response body and convert to js object
    const data = await userData.json()
//return data 
    return data;
}

type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
};

//create another asynchronous function
async function getUsers(){
    try{
        const users = await fetchUsers();
        console.log(users.id)
    }
    catch(error){
        console.log("Error",error)
    }
}
getUsers()