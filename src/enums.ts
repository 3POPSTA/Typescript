// Numeric enums auto-increment from zero by default.
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
console.log(CardinalDirections.North);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
console.log(CardinalDirections.West);

// An explicit initial value sets the starting point for auto-incrementing.
enum Directions {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Directions.Up);
console.log(Directions.Down);
console.log(Directions.Left);
console.log(Directions.Right);

// Numeric enums can use explicit values.
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

// String enums use explicit string values.
enum CardinalDirection {
  N = "North",
  E = "East",
  S = "South",
  W = "West",
}
console.log(CardinalDirection.N);
console.log(CardinalDirection.W);