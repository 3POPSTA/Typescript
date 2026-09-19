//TypeScript Error Handling

//any
try{
    //code 
}
catch(error:any){
    console.log(error.message)
}

//unknown
try{
    //code
}
catch(error:unknown){
    if(error instanceof Error){
        console.log(error.message);
    }
    else{
        console.log("Unexpected error:", String(error));
    }
}

//Creating Custom Errors
class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 500,
    public readonly isOperational: boolean = true
  ) {
    super(message);
    this.name = 'AppError';
    // This line is important for extending built-ins in TS
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

class ValidationError extends AppError {
  constructor(message: string, public readonly fields: Record<string, string>) {
    super(message, 400);
    this.name = 'ValidationError';
  }
}