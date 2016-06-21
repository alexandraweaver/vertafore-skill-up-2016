// Defining types for functions has a ton of flexibility (which is obviously required for working with JavaScript).

type concatString = {
    (a:string, b:string):string
}

const createFullName:concatString = (first, last)=> `${first} ${last}`;
