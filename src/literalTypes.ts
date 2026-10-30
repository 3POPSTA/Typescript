type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

const direction: Direction = "south";
move(direction);
move("east");