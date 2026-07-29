//Enums
//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each
enum CardinalDirections{
    North,
    East,
    South,
    West
}
console.log(CardinalDirections.North)
console.log(CardinalDirections.East)
console.log(CardinalDirections.South)
console.log(CardinalDirections.West)

//Numeric Enums - Initialized
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

//Numeric Enums - Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);


//String Enums
enum CardinalDir{
  N = 'North',
  E = "East",
  S = "South",
  W = "West"
};
// logs "North"
console.log(CardinalDir.N);
// logs "West"
console.log(CardinalDir.W);