//Promise
const promise = new Promise<string>((resolve,reject)=>{
    resolve("Hello")
})

// function wait(): Promise<string>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Hello");
//         },3000)
//         // reject("Error")
//     })
// }
// wait().then((response)=>{
//     console.log(response)
// })
// .catch((error)=> console.log(error))
// .finally(()=> console.log("Finished"))

// function fetchData(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simulating an API call
//       const success = true;
//       if (success) {
//         resolve("Data fetched successfully");
//       } else {
//         reject(new Error("Failed to fetch data"));
//       }
//     }, 1000);
//   });
// }

// Define the type for the Todo item
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Using Promise with .then() and .catch()
function fetchTodo(): Promise<Todo> {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json() as Promise<Todo>;
    });
}

// Usage
fetchTodo()
  .then((todo) => {
    console.log('Todo:', todo);
    console.log('Title:', todo.title);
    console.log('Completed:', todo.completed);
  })
  .catch((error) => {
    console.error('Error fetching todo:', error);
  });