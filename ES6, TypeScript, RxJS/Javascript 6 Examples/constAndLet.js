// Let uses "block scope". So a variable declared with let inside of an if statement or for loop will not be hoisted
// to its outer function. Similarly, a let variable will never accidentally be assigned to the "global" scope.

//const is like a let that you can't reassign.

let message = `<h2>Still the same variable "after" the block</h2>`;

if(true){
    let message = `<h1>A completely different variable inside the block</h1>`;
    document.body.innerHTML = message;
}

document.body.innerHTML += message;



const stuff = {};
//const stuff = 10; //throws VM474 app.js:13 Uncaught SyntaxError: Identifier 'stuff' has already been declared

stuff.foo = "bar"; //this is *fine* since you're mutating, not reassigning.


/////////////////////////////* NOTES */////////////////////////////