// Catch values are unknown until their types have been checked.
try {
  throw new Error("Example failure");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unexpected error:", String(error));
  }
}

class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 500,
    public readonly isOperational: boolean = true,
  ) {
    super(message);
    this.name = new.target.name;
  }
}

class ValidationError extends AppError {
  constructor(
    message: string,
    public readonly fields: Readonly<Record<string, string>>,
  ) {
    super(message, 400);
  }
}

try {
  throw new ValidationError("Invalid input", { email: "Must be a valid email address" });
} catch (error: unknown) {
  if (error instanceof ValidationError) {
    console.error(error.statusCode, error.fields);
  } else {
    throw error;
  }
}