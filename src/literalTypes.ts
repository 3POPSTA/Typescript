// A variable with a string literal type
let direction: "north" | "south" | "east" | "west";

// Valid assignments
direction = "north";
direction = "south";

// Invalid assignments would cause errors
// direction = "northeast"; // Error: Type '"northeast"' is not assignable to type '"north" | "south" | "east" | "west"'
// direction = "up"; // Error: Type '"up"' is not assignable to type '"north" | "south" | "east" | "west"'

// Using string literal types in functions
function move(direction: "north" | "south" | "east" | "west") {
  console.log(`Moving ${direction}`);
}

move("east"); // Valid
// move("up"); // Error: Argument of type '"up"' is not assignable to parameter of type...