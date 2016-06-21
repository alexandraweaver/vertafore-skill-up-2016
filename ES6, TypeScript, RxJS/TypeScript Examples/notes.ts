// Javascript
// class Person{
//
//     constructor() {
//         this.name = "John";
//     }
// }

// Typescript
class Person{
    name = "John";

    constructor(name){
        this.name = name;
    }
}

// Typing parameters & variables
const greet = (name:string) => "Hello ${name}";
let firstName:string;
let anyType:any;

// Typing functions; not giving type is the same as giving any as a type
const greet = (name:string):void => "Hello";

// Types use object syntax
type Person = {
    name:string,
    age:number,
    height:number,
    hair?:boolean // ? makes it optional
}

// Interfaces use class syntax
interface Person {
    name:string;
    age:number;
    height:number;
    hair?:boolean; // ? makes it optional
}

const greet = (person:Person)=> "Hello, ${person.name}";

const john:Person = {name:'', age:0, height:0, hair:false};
