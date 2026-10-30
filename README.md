# TypeScript Learning Examples

This repository is a collection of small TypeScript examples covering language fundamentals and commonly used type-system features. Each file in `src/` is a standalone example; there is no single application entry point or test suite.

## Requirements

- Node.js and npm
- TypeScript, installed from the project dependencies
- Node.js 18 or newer to run examples that use the built-in `fetch` API

## Getting started

Install the development dependency:

```sh
npm install
```

Compile the TypeScript files:

```sh
npx tsc
```

The compiler reads `tsconfig.json` and writes JavaScript, declaration files, and source maps to `build/`.

To run an individual compiled example, use Node.js, for example:

```sh
node build/arrays.js
```

You can substitute another compiled filename, such as `functions.js` or `generics.js`. Some examples make network requests when run (notably `asyncPro.ts` and `promise.ts`), so those require an internet connection.

To check types without generating build output:

```sh
npx tsc --noEmit
```

## Topics

| Source file | Topics |
| --- | --- |
| `advTypes.ts` | Mapped types |
| `aliases.ts` | Type aliases for primitives and object properties |
| `arrays.ts` | Typed, multidimensional, and readonly arrays; inference |
| `asyncPro.ts` | Async functions, `await`, and fetching data |
| `callbacks.ts` | Function values and callback parameters |
| `casting.ts` | Type assertions |
| `classes.ts` | Classes, access modifiers, inheritance, and abstract classes |
| `deMerging.ts` | Declaration merging, overloads, and namespace augmentation |
| `enums.ts` | Numeric and string enums |
| `errorhandling.ts` | `any` and `unknown` errors; custom error classes |
| `functions.ts` | Return types, parameters, optional/default parameters, and rest parameters |
| `generics.ts` | Generic functions, classes, and aliases |
| `indexSignatures.ts` | String and number index signatures |
| `interface.ts` | Interfaces, extension, callable interfaces, and implementation |
| `keyof.ts` | Key types and indexed property access |
| `literalTypes.ts` | String literal unions |
| `namespace.ts` | Namespaces and nested namespaces |
| `null.ts` | Nullable values and optional chaining |
| `objectTypes.ts` | Object shapes, optional properties, and index signatures |
| `promise.ts` | Promises and handling asynchronous results |
| `turples.ts` | Tuples, readonly and named tuples, and destructuring |
| `type.ts` | Type aliases, unions, intersections, and function types |
| `types.ts` | Primitive types and `any` |
| `utilType.ts` | Utility types including `Pick`, `Omit`, `Partial`, `Required`, and `Record` |

These are illustrative snippets, not a production library. Some files contain commented-out examples, and running a compiled file may print output or perform the actions shown in that example.
