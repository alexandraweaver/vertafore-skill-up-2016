// Any types
// If you don't add types, TypeScript will just assume it's a type of any. any can be anything.

const add = (x, y) => x + y;
//is the same as:
const add = (x:any, y:any):any => x + y;


// Primitive types
//All the JavaScript primitives are available as types: number, string, boolean
const add = (x:number, y:number):number => x + y;

