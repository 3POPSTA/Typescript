// Tuples represent arrays with a fixed set of element types and positions.
const item: [number, boolean, string] = [1, true, "example"];
const characters: readonly [number, boolean, string] = [1, true, "example"];

const graph: [x: number, y: number] = [12, 45];
const points: [number, number] = [12, 34];
const [x, y] = points;

type UserRecord = [string, number, string];
const userRecord: UserRecord = ["Ada", 36, "Engineer"];

console.log(item, characters, graph, x, y, userRecord);