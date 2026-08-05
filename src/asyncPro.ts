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

// Define types for our API response
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

// Function that returns a Promise of User array
async function fetchUsers(): Promise<User[]> {
  console.log('Fetching users...');
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
  ];
}

// Async function to process users
async function processUsers() {
  try {
    // TypeScript knows users is User[]
    const users = await fetchUsers();
    console.log(`Fetched ${users.length} users`);

    // Type-safe property access
    const adminEmails = users
      .filter(user => user.role === 'admin')
      .map(user => user.email);

    console.log('Admin emails:', adminEmails);
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to process users:', error.message);
    } else {
      console.error('An unknown error occurred');
    }
    throw error; // Re-throw to let caller handle
  }
}

// Execute the async function
processUsers()
  .then(users => console.log('Processing complete'))
  .catch(err => console.error('Processing failed:', err));







